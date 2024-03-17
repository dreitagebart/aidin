'use client'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import classes from '~/styles/layout.module.css'
import { AppShell, MantineProvider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FC, PropsWithChildren } from 'react'

import { Header } from './header'
import { Navbar } from './navbar'
import { Main } from './main'

dayjs.extend(relativeTime)

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <MantineProvider defaultColorScheme='dark'>
      <AppShell
        classNames={{
          header: classes.header,
          navbar: classes.navbar
        }}
        withBorder={false}
        layout='alt'
        header={{
          height: 60,
          offset: true,
          collapsed: false
        }}
        navbar={{
          width: { base: 380, xl: 420 },
          breakpoint: 'sm',
          collapsed: { mobile: !opened }
        }}
      >
        <Header opened={opened} onClick={toggle}></Header>
        <Navbar onClick={toggle}></Navbar>
        <Main>{children}</Main>
      </AppShell>
    </MantineProvider>
  )
}
