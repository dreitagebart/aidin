import dayjs from 'dayjs'
import { Group, Loader, Paper, Text } from '@mantine/core'
import { FC } from 'react'

interface Props {
  active: boolean
  date: Date
  message: string
}

export const MessageBlock: FC<Props> = ({ active, date, message }) => {
  if (!message) {
    return null
  }

  return (
    <div>
      <Text ml='xs' size='sm' c='dimmed'>
        {dayjs(date).fromNow()}
      </Text>
      <Paper mt={4} withBorder p='md'>
        <Group>
          <Text>{message}</Text>
          {active && <Loader type='dots'></Loader>}
        </Group>
      </Paper>
    </div>
  )
}
