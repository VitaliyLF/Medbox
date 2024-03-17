import { client } from './clientSanity'

export async function getDataHomePage() {
  const query = `
    *[_type == 'homepage'] [0] {
      header {
      headerLogo,
      headerLinks [] {
        headerLinksText
      },
      headerBtnText,
      headerMobileBtnText,
      },
      hero {
      heroTitle,
      heroSubtitle,
      heroText,
      heroBtnText,
      heroWrapperImage {
        heroImage,
        herosAltImageText
      },
      },
      videoBlock {
        asset->{
          url
        },
        videoBlockPoster
      },
      listLine {
        listLineSubtitle,
        listLineText,
        listLineLink
      }
    }
  `

  const data = await client.fetch(query)

  return data
}
