export const isNil = (val: any): val is null | undefined =>
  isUndefined(val) || val === null

export const isObject = (fn: any): fn is Record<string, unknown> =>
  !isNil(fn) && typeof fn === 'object'

export const isUndefined = (obj: any): obj is undefined =>
  typeof obj === 'undefined'

const toDataString = (data: string | Record<string, unknown>): string => {
  if (isObject(data)) {
    return toDataString(JSON.stringify(data))
  }

  return data
    .split(/\r\n|\r|\n/)
    .map((line) => `data: ${line}\n\n`)
    .join('')
}

export type AIdinEvents = EventNotifier<{
  update: {
    data: string
    event: 'aidin'
  }
  // complete: {
  //   data: string
  //   event: 'aidin'
  // }
}>

interface Message<T = string | Record<string, unknown>> {
  data: T
  comment?: string
  event?: string
  id?: string
  retry?: number
}

interface EventNotifier<
  T extends {
    update: T['update'] extends Message ? Message<T['update']>['data'] : never
    // complete: T['complete'] extends Message
    //   ? Message<T['complete']>['data']
    //   : never
  } = any
> {
  update: (message: Message<T['update']>['data']) => void
  // complete: (message: Message<T['complete']>['data']) => void
}

export class Writer implements EventNotifier {
  constructor(
    readonly writer: WritableStreamDefaultWriter,
    readonly encoder: TextEncoder
  ) {}

  writeMessage(
    writer: WritableStreamDefaultWriter,
    encoder: TextEncoder,
    message: Message
  ): void {
    if (message.comment) {
      void writer.write(encoder.encode(`: ${message.comment}\n`))
    }
    if (message.event) {
      void writer.write(encoder.encode(`event: ${message.event}\n`))
    }
    if (message.id) {
      void writer.write(encoder.encode(`id: ${message.id}\n`))
    }
    if (message.retry) {
      void writer.write(encoder.encode(`retry: ${message.retry}\n`))
    }
    if (message.data) {
      void writer.write(encoder.encode(toDataString(message.data)))
    }
  }

  update(message: Message) {
    this.writeMessage(this.writer, this.encoder, message)
  }

  complete(message: any) {
    this.writeMessage(this.writer, this.encoder, message)

    void this.writer.close()
  }
}

export const getSSEWriter = (
  writer: WritableStreamDefaultWriter,
  encoder: TextEncoder
) => new Writer(writer, encoder)
