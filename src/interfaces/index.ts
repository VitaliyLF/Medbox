// Section interfaces
export interface IContent {
  btnText: string | null
  image: IImage
  alt: string | null
  title: string | null
  subtitle: string | null
  text: ITextBlock[]
  url?: string
  linkText?: string
}

export interface IFaqLits {
  list: {
    linkText: string | null
    image: IImage
    alt: string | null
    _key: string
    summary: string
    text: ITextBlock[]
    url: string | null
  }[]
}

// Partials interfaces
interface IImage {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}

interface ITextBlockChild {
  _type: string
  marks: string[]
  text: string
  _key: string
}

export interface ITextBlock {
  style: string
  _key: string
  markDefs: any[]
  children: ITextBlockChild[]
  _type: string
}
