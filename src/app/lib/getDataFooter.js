import { client } from './clientSanity'

export async function getDataFooter() {
  const query = `
    *[_type == 'footer'][0] {
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
  `

  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
