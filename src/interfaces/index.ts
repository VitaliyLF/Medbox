// Section interfaces
export interface IContent {
  btnText: string | null
  image: IImage
  alt: string | null
  title: string | null
  subtitle: string | null
  text: ITextBlock[]
  url: string
  linkText?: string
}

export interface IFaq extends IContent {
  list: IFaqItem[]
}

export interface IFaqItem {
  linkText: string | null
  image: IImage
  alt: string | null
  _key: string
  summary: string
  text: ITextBlock[]
  url: string | null
}

export interface IFeedBack extends IContent {
  list: IFeedBackItem[]
  subtext: IPortableText[]
}

export interface IFeedBackItem {
  stars: number | null
  socialIcon: IImage
  socialIconAlt: string | null
  socialUrl: string | null
  blockquote: {
    text: string
    author: string
  } | null
  _key: string
}

export interface ILineList extends IContent {
  list: ILineListItem[]
}

export interface ILineListItem {
  _key: string
  content: string
}

export interface IResources extends IContent {
  list: IResourcesItem[]
}

export interface IResourcesItem {
  urt: string
  image: IImage
  alt: string | null
  tag: string | null
  subtitle: string | null
  _key: string | null
}

export interface IStates extends IContent {
  textContact: IPortableText[]
}

// Partials interfaces

interface IImage {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}

export interface IPortableText {
  _type: 'block'
  style: string
  _key: string
  markDefs: {
    _type: 'link'
    href: string
    _key: string
  }[]
  children: {
    _type: 'span'
    marks: string[]
    text: string
    _key: string
  }[]
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
