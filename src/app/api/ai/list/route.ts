import ollama from 'ollama'

export const GET = async () => {
  return Response.json(await ollama.list())
}
