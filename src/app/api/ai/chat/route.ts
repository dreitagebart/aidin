import ollama, { ChatResponse, Message } from 'ollama'
import { NextRequest, NextResponse } from 'next/server'
import { AIdinEvents, getSSEWriter } from '~/lib/writer'
import { headers } from 'next/headers'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const POST = async (request: NextRequest) => {
  const dsf = await request.json()

  console.log('dsf', dsf)

  const searchParams = request.nextUrl.searchParams
  const content = searchParams.get('message')

  if (!content) {
    return NextResponse.json({ nothing: true })
  }

  const message: Message = { role: 'user', content }

  const stream = new TransformStream()
  const writer = stream.writable.getWriter()
  const encoder = new TextEncoder()

  request.signal.onabort = () => {
    writer.close()
  }

  const response = await ollama.chat({
    model: 'llama2',
    messages: [message],
    stream: true
  })

  const sendData = async (generator: AsyncGenerator<ChatResponse>) => {
    void writer.write(encoder.encode(`event: open\n\n`))

    for await (const part of generator) {
      void writer.write(encoder.encode(`event: aidin\n`))
      void writer.write(encoder.encode(`data: ${part.message.content}\n\n`))

      if (part.done) {
        void writer.write(encoder.encode(`event: close\n`))
        void writer.write(encoder.encode(`data: bye\n\n`))
      }
    }
  }

  sendData(response)

  return new NextResponse(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache, no-transform'
    }
  })
}
