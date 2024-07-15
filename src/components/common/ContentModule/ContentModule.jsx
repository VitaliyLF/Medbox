import TitleSection from '@/components/common/TitleSection/TitleSection'
import SubtitleSection from '@/components/common/SubtitleSection/SubtitleSection'
import TextSection from '@/components/common/TextSection/TextSection'
import Button from '@/components/common/UI/Button/Button'
import Link from 'next/link'

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
}) => (
  <div className={contentClassName || null}>
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
