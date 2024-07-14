import { client } from './clientSanity'

export async function getDataHeader() {
  const query = `
    *[_type == 'header'][0] {
      logo,
      links[] {
        _key,
        text,
        href
      },
      btnText,
      btnTextMobile
    }
  `

  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
