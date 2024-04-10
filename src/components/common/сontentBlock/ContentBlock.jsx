import TitleSection from '@/components/common/titleSection/TitleSection'
import SubtitleSection from '@/components/common/subtitleSection/SubtitleSection'
import TextSection from '@/components/common/textSection/TextSection'
import Button from '@/components/common/button/Button'
import Link from 'next/link'

const ContentBlock = ({
  contentClassName,
  title,
  subtitle,
  subtitleModifier,
  btnText,
  btnModifier,
  text,
  textModifier,
  linkModifier,
  linkText,
  url
}) => (
  <div className={contentClassName || ''}>
    {title && <TitleSection titleSection={title} />}
    {subtitle && <SubtitleSection subtitleSection={subtitle} modifier={subtitleModifier} />}
    {text && <TextSection textSection={text} modifier={textModifier} />}
    {linkText && url && (
      <Link className={`link ${linkModifier ? `link--${linkModifier}` : 'btn'}`} href={url}>
        {linkText}
      </Link>
    )}
    {btnText && <Button buttonText={btnText} modifier={btnModifier} />}
  </div>
)

export default ContentBlock
