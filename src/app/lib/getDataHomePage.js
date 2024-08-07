import { client } from './clientSanity'

export async function getDataHomePage() {
  const query = `
    *[_type == 'homepage'] [0] {
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
        linkText,
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
        listImages [] {
          image,
          alt
        },
        image,
        alt,
        list [] {
          _key,
          title,
          text
        },
        linkText
      },
      banner {
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
        linkText,
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
        linkText
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
        linkText,
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
        logo,
        contactList [] {
          _key,
          title,
          text,
          sublist [] {
            _key,
            linkText,
            url,
          }
        },
        socialList [] {
          _key,
          linkText,
          url,
          socialIcon,
          socialIconAlt
        },
        policyList [] {
          _key,
          linkText,
          url
        },
        copyright,
        partnersList [] {
          _key,
          url,
          image,
          alt
        }
      }
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
