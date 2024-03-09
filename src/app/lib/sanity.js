import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: '2024-05-03',
  dataset: 'production',
  projectId: 'wuc0r56x',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
