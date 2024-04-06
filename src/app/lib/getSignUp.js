import { client } from './clientSanity'

export async function getSignUp(signUpData) {
  const currentDate = new Date().toISOString()

  const data = {
    _type: 'form',
    ...signUpData,
    createdAt: currentDate
  }

  const response = await client.create(data).catch((error) => {
    console.error('Error creating contact:', error.message)
    throw new Error('Failed to create contact')
  })

  return response
}
