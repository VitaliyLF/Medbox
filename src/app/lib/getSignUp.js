import { client } from './clientSanity'

export async function getSignUp(signUpData) {
  const data = {
    _type: 'form',
    ...signUpData,
    createdAt: new Date().toISOString()
  }

  try {
    const response = await client.create(data)
    console.log('Success send')
    return response
  } catch (error) {
    console.error('Error creating contact:', error.message)
    throw new Error('Failed to create contact')
  }
}
