'use client'

import classes from '~/styles/header.module.css'
import {
  ActionIcon,
  AppShellHeader,
  Flex,
  Group,
  Select,
  SelectProps,
  Text
} from '@mantine/core'
import { IconChevronDown, IconMenuDeep, IconX } from '@tabler/icons-react'
import { FC, useEffect, useState } from 'react'
import { listModels } from '~/app/actions'
import { ModelResponse } from 'ollama'
import { useLocalStorage } from '@mantine/hooks'

interface Props {
  opened: boolean
  onClick: () => void
}

const renderOption: SelectProps['renderOption'] = ({ option }) => {
  return (
    <Group justify='space-between' grow>
      <Text fw='bold'>{option.label}</Text>
    </Group>
  )
}

export const Header: FC<Props> = ({ opened, onClick }) => {
  const [model, setModel] = useLocalStorage({
    key: 'aidin-model',
    defaultValue: ''
  })
  const [models, setModels] = useState<Array<ModelResponse>>([])

  useEffect(() => {
    listModels().then((res) => {
      setModel((m) => (m ? m : res.models[0].name))
      setModels(res.models)
    })
  }, [setModel])

  return (
    <AppShellHeader>
      <Flex
        mx='lg'
        direction='row'
        align='center'
        classNames={{ root: classes.root }}
      >
        <ActionIcon
          hiddenFrom='sm'
          size='xl'
          onClick={onClick}
          variant='transparent'
        >
          {opened ? <IconX></IconX> : <IconMenuDeep></IconMenuDeep>}
        </ActionIcon>
        <Select
          rightSection={<IconChevronDown size={18}></IconChevronDown>}
          variant='unstyled'
          allowDeselect={false}
          value={model}
          data={models.map(({ name }) => {
            return { value: name, label: name }
          })}
          onChange={(value) => setModel(String(value))}
          renderOption={renderOption}
        ></Select>
      </Flex>
    </AppShellHeader>
  )
}
