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
      heroImageAndAlt {
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
        listLineStar [] {
          listLineStarItem
        },
        listLineSocialIcon,
        listLineSocialIconAlt,
        listLineSocialUrl,
        listLineBlockquote {
          listLineBlockquoteText,
          listLineBlockquoteAuthor
        },
      },
      benefits {
        benefitsTitle,
        benefitsSubtitle,
        benefitsText,
        benefitsBtnText,
        benefitsImageAndAlt {
        benefitsImage,
        benefitsImageAlt
        },
      },
      stickyList {
        stickyListTitle,
        stickyListSubtitle,
      }
    }
  `

  const data = await client.fetch(query)

  return data
}
