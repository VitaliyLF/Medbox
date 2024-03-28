import { client } from './clientSanity'

export async function getDataHomePage() {
  const query = `
    *[_type == 'homepage'] [0] {
      header {
      logo,
      links [] {
        text
      },
      btnText,
      btnTextMobile,
      },
      hero {
      title,
      subtitle,
      text,
      btnText,
      image,
      alt,
      },
      videoSection {
        file {
          asset-> {
            url
          }
        },
        title,
        poster,
      },
      listLine {
        subtitle,
        text,
        btnText,
        list [] {
          content
        },
        image,
        stars,
        socialIcon,
        socialIconAlt,
        socialUrl,
        blockquote {
          text,
          author
        }
      },
      benefits {
        title,
        subtitle,
        text,
        btnText,
        image,
        alt
      },
      stickyList {
        title,
        subtitle,
        image,
        alt,
        list [] {
          title,
          text
        },
        btnText
      },
      infoBlock {
        subtitle,
        text,
        url,
        linkText,
        btnText,
        image,
        alt,
        stars,
        socialIcon,
        socialIconAlt,
        socialUrl,
        blockquote {
          text,
          author
        }
      },
      states {
        title,
        subtitle,
        text,
        textContact,
        btnText,
        image,
        alt
      },
      feedback {
        subtitle,
        text,
        list [] {
          stars,
          socialIcon,
          socialIconAlt,
          socialUrl,
          blockquote {
            text,
            author
          }
        },
        subtext,
        btnText,
        url
      },
    }
  `

  const data = await client.fetch(query)

  return data
}
