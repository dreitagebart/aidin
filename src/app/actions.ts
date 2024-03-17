'use server'

export const listModels = async () => {
  const res = await fetch('http://localhost:3000/api/ai/list')

  return await res.json()
}
