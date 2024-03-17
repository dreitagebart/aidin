import classes from '~/styles/navbar.module.css'
import { ActionIcon, AppShellNavbar, Flex, Text } from '@mantine/core'
import { IconIndentDecrease } from '@tabler/icons-react'
import { FC } from 'react'

interface Props {
  onClick: () => void
}

export const Navbar: FC<Props> = ({ onClick }) => {
  return (
    <AppShellNavbar p='md'>
      <Flex direction='row' justify='right' hiddenFrom='sm'>
        <ActionIcon onClick={onClick} variant='transparent'>
          <IconIndentDecrease size={64}></IconIndentDecrease>
        </ActionIcon>
      </Flex>
      <Text>AIdin</Text>
    </AppShellNavbar>
  )
}
