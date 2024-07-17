import { client } from './clientSanity'

export async function getSignUp(signUpData) {
  const data = {
    _type: 'signup',
    email: signUpData.email,
    createdAt: new Date().toISOString(),
  }

  try {
    const response = await client.create(data)
    return response
  } catch (error) {
    console.error('Error creating contact:', error)
    throw new Error('Failed to create contact')
  }
}
