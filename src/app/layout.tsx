import '@mantine/core/styles.css'
import '~/styles/globals.css'
import { ColorSchemeScript } from '@mantine/core'
import { Layout } from '~/components/layout'

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en'>
      <head>
        <title>&lang;AIdin&rang;</title>
        <ColorSchemeScript defaultColorScheme='dark'></ColorSchemeScript>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export default RootLayout
