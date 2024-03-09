import { client } from './sanity'

export async function getDataHomePage() {
  const query = `
    *[_type == 'homepage'] [0] {
      headerLogo,
      headerLinks [] {
        headerLinksText
      },
    }
  `

  const data = await client.fetch(query)

  return data
}
