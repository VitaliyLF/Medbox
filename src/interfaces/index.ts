// Section interfaces
export interface IHeroContent {
  btnText: string | null
  image: IImage
  alt: string | null
  title: string | null
  subtitle: string | null
  text: ITextBlock[]
}

// Common interfaces

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

interface ITextBlock {
  style: string
  _key: string
  markDefs: any[]
  children: ITextBlockChild[]
  _type: string
}
