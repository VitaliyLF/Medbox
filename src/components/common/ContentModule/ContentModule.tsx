import SubtitleSection from '@/components/common/SubtitleSection/SubtitleSection'
import TextSection from '@/components/common/TextSection/TextSection'
import TitleSection from '@/components/common/TitleSection/TitleSection'
import Button from '@/components/common/UI/Button/Button'
import { ITextBlock } from '@/interfaces'
import Link from 'next/link'

interface Props {
  contentClassName?: string | undefined
  title?: string | null
  titleModifier?: string | null
  subtitle?: string | null
  subtitleModifier: string | null
  btnText: string | null
  btnModifier?: string | null
  text?: ITextBlock[]
  textModifier?: string | null
  linkModifier?: string | null
  linkText?: string | null
  url?: string | null
}

const ContentModule = ({
  contentClassName,
  title,
  titleModifier,
  subtitle,
  subtitleModifier,
  btnText,
  btnModifier,
  text,
  textModifier,
  linkModifier,
  linkText,
  url,
}: Props) => (
  <div className={contentClassName}>
    {Boolean(title) && (
      <TitleSection modifier={titleModifier}>{title}</TitleSection>
    )}
    {Boolean(subtitle) && (
      <SubtitleSection modifier={subtitleModifier}>{subtitle}</SubtitleSection>
    )}
    {Boolean(text) && <TextSection modifier={textModifier}>{text}</TextSection>}
    {linkText && url && (
      <Link
        className={linkModifier ? `link link--${linkModifier}` : 'btn'}
        href={url}>
        {linkText}
      </Link>
    )}
    {Boolean(btnText) && (
      <Button modifier={btnModifier} type="button">
        {btnText}
      </Button>
    )}
  </div>
)

export default ContentModule
