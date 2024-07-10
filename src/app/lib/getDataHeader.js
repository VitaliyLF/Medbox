import { client } from './clientSanity'

export async function getDataHeader() {
  const query = `
    *[_type == 'header'] [0] {
      header {
      logo,
      links [] {
        _key,
        text,
        href
      },
      btnText,
      btnTextMobile,
      },
    }
    `

  const data = await client.fetch(query)

  return data
}
