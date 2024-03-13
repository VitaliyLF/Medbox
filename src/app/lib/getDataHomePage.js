import { client } from './sanity'

export async function getDataHomePage() {
  const query = `
    *[_type == 'homepage'] [0] {
      headerLogo,
      headerLinks [] {
        headerLinksText
      },
      headerBtnText,
      headerMobileBtnText,
      heroTitle,
      heroSubtitle,
      heroText,
      heroBtnText,
      heroImages [] {
        heroImage,
        herosAltImageText,
      },
    }
  `

  const data = await client.fetch(query)

  return data
}
