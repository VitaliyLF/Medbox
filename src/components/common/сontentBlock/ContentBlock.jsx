import TitleSection from '@/components/common/titleSection/TitleSection'
import SubtitleSection from '@/components/common/subtitleSection/SubtitleSection'
import TextSection from '@/components/common/textSection/TextSection'
import Button from '@/components/common/button/Button'

const ContentBlock = ({
  contentClassName,
  title,
  subtitle,
  subtitleModifier,
  btnText,
  btnModifier,
  text,
  textModifier
}) => (
  <div className={contentClassName || ''}>
    {title && <TitleSection titleSection={title} />}
    {subtitle && <SubtitleSection subtitleSection={subtitle} modifier={subtitleModifier} />}
    {text && <TextSection textSection={text} modifier={textModifier} />}
    {btnText && <Button buttonText={btnText} modifier={btnModifier} />}
  </div>
)

export default ContentBlock
