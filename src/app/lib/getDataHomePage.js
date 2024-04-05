import { client } from './clientSanity'

export async function getDataHomePage() {
  const query = `
    *[_type == 'homepage'] [0] {
      header {
      logo,
      links [] {
        _key,
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
      lineList {
        subtitle,
        text,
        btnText,
        list [] {
          _key,
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
          _key,
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
          _key,
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
      faq {
        title,
        subtitle,
        list [] {
          _key,
          summary,
          text,
          url,
          linkText,
          image,
          alt
        },
        btnText
      },
      supporting {
        title,
        subtitle,
        list [] {
          _key,
          url,
          image,
          alt
        }
      },
      resources {
        subtitle,
        text,
        btnText,
        url,
        list [] {
          _key,
          url,
          image,
          alt,
          tag,
          subtitle
        }
      },
      signUp {
        subtitle,
        image,
        text
      },
      footer {
        
      }
    }
  `

  const data = await client.fetch(query)

  return data
}
