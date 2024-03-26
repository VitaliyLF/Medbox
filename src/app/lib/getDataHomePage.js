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
        }
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
        stickyListImageAndAlt {
          stickyListImage,
          stickyListImageAlt
        },
        stickyListItems [] {
          stickyListItemTitle,
          stickyListItemText
        },
        stickyListTextButton
      },
      infoBlock {
        infoBlockSubtitle,
        infoBlockText,
        infoBlockUrl,
        infoBlockValue,
        infoBlogBtnText,
        infoBlockImageAndAlt {
          infoBlockImage,
          infoBlockImageAlt
        },
        infoBlockStar [] {
          infoBlockStarItem
        },
        infoBlockSocialIcon,
        infoBlockSocialIconAlt,
        infoBlockSocialUrl,
        infoBlockBlockquote {
          infoBlockBlockquoteText,
          infoBlockBlockquoteAuthor
        }
      },
      states {
        statesTitle,
        statesSubtitle,
        statesText,
        statesTextContact,
        statesBtnText,
        statesImageAndAlt {
          statesImage,
          statesImageAlt
        }
      },
      feedback {
        feedbackSubtitle,
        feedbackText,
        feedbackList [] {
          feedbackStar,
          feedbackSocialIcon,
          feedbackSocialIconAlt,
          feedbackSocialUrl,
          feedbackBlockquote {
            feedbackBlockquoteText,
            feedbackBlockquoteAuthor
          }
        },
      },
    }
  `

  const data = await client.fetch(query)

  return data
}
