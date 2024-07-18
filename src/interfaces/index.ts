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
export interface IContentModule {
  contentClassName?: string | undefined
  title?: string | null
  titleModifier?: string | null
  subtitle?: string | null
  subtitleModifier?: string | null
  btnText: string | null
  btnModifier?: string | null
  text?: ITextBlock[]
  textModifier?: string | null
  linkModifier?: string | null
  linkText?: string | null
  url?: string | null
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
