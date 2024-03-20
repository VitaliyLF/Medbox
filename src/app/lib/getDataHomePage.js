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
      videoSection {
        videoFile {
          asset-> {
            url
          }
        },
        videoBlockPoster,
        videoBlockHiddenTitle,
      },
      listLine {
        listLineSubtitle,
        listLineText,
        listLineLink,
        listLineItems [] {
          listLineItem
        },
        listLineImage,
      }
    }
  `

  const data = await client.fetch(query)

  return data
}
