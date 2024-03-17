import Image from 'next/image'
import { AspectRatio } from '@mantine/core'
import { NextPage } from 'next'
import { Prompt } from '~/components/prompt'

const Page: NextPage = () => {
  return (
    <>
      <AspectRatio maw={360} mx='auto'>
        <Image src='/aidin.png' alt='odin' fill quality={100}></Image>
      </AspectRatio>
      <Prompt></Prompt>
    </>
  )
}

export default Page
