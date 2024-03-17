import { AppShellMain, Container } from '@mantine/core'
import { FC, PropsWithChildren } from 'react'

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShellMain>
      <Container>{children}</Container>
    </AppShellMain>
  )
}
