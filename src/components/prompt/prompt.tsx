'use client'

import classes from '~/styles/prompt.module.css'
import { ActionIcon, Box, Loader, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useFocusTrap } from '@mantine/hooks'
import { IconCornerDownLeft } from '@tabler/icons-react'

import { Chat } from './chat'

interface Props {}

interface FormState {
  prompt: string
}

export const Prompt: FC<Props> = () => {
  const focusRef = useFocusTrap()
  const [message, setMessage] = useState('')
  const [eventSource, setEventSource] = useState<null | EventSource>(null)
  const [active, setActive] = useState(false)
  const { values, setFieldValue, onSubmit } = useForm<FormState>({
    initialValues: {
      prompt: ''
    }
  })
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFieldValue(event.target.name, event.target.value)
  }
  const handleSubmit = ({ prompt }: FormState) => {
    const source = new EventSource(
      `http://localhost:3000/api/ai/chat?message=${encodeURIComponent(prompt)}`
    )

    setEventSource(source)
  }

  useEffect(() => {
    if (!eventSource) {
      return
    }

    eventSource.addEventListener('open', (event) => {
      debugger
      setActive(true)
    })

    eventSource.addEventListener('aidin', (event) => {
      setMessage((m) => `${m}${event.data}`)
    })

    eventSource.addEventListener('close', (event) => {
      debugger
      eventSource.close()
      setActive(false)
    })

    return () => {
      eventSource.close()
    }
  }, [eventSource])

  return (
    <>
      <Chat message={message} active={active}></Chat>
      <form onSubmit={onSubmit(handleSubmit)}>
        <Box className={classes.root} ref={focusRef}>
          <Textarea
            rows={1}
            ml='md'
            variant='unstyled'
            size='xl'
            minRows={1}
            placeholder='what do you want to know today?'
            onChange={handleChange}
            value={values.prompt}
            name='prompt'
            autosize
            rightSection={
              <ActionIcon type='submit' size={36} variant='transparent'>
                <IconCornerDownLeft size={36}></IconCornerDownLeft>
              </ActionIcon>
            }
          ></Textarea>
        </Box>
      </form>
    </>
  )
}
