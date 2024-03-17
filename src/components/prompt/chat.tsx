import { FC } from 'react'
import { Stack } from '@mantine/core'

import { MessageBlock } from './message-block'

interface Props {
  active: boolean
  message: string
}

export const Chat: FC<Props> = ({ message, active }) => {
  return (
    <Stack>
      <MessageBlock
        active={active}
        date={new Date()}
        message={message}
      ></MessageBlock>
      {/* <MessageBlock
        date={new Date()}
        message='Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen
        ihnen Profi was sie sind.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele
        Situationen.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Erstens: wir haben nicht offensiv gespielt.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv
        wie Bayern.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann
        Zickler. Wir müssen nicht vergessen Zickler.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen
        ihnen Profi was sie sind.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele
        Situationen.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Erstens: wir haben nicht offensiv gespielt.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv
        wie Bayern.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann
        Zickler. Wir müssen nicht vergessen Zickler.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen
        ihnen Profi was sie sind.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele
        Situationen.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Erstens: wir haben nicht offensiv gespielt.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv
        wie Bayern.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann
        Zickler. Wir müssen nicht vergessen Zickler.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen
        ihnen Profi was sie sind.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele
        Situationen.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Erstens: wir haben nicht offensiv gespielt.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv
        wie Bayern.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann
        Zickler. Wir müssen nicht vergessen Zickler.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen
        ihnen Profi was sie sind.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele
        Situationen.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Erstens: wir haben nicht offensiv gespielt.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv
        wie Bayern.'
      ></MessageBlock>
      <MessageBlock
        date={new Date()}
        message='Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann
        Zickler. Wir müssen nicht vergessen Zickler.'
      ></MessageBlock> */}
    </Stack>
  )
}
