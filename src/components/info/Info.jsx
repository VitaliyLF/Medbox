import TitleSection from '../titleSection/TitleSection'
import SubtitleSection from '../subtitleSection/SubtitleSection'
import TextSection from '../textSection/TextSection'
import Button from '../button/Button'

const Info = ({ infoClassName, title, subtitle, subtitleModifier, btnText, btnModifier, text, textModifier }) => (
  <div className={infoClassName || ''}>
    {title && <TitleSection titleSection={title} />}
    {subtitle && <SubtitleSection subtitleSection={subtitle} modifier={subtitleModifier} />}
    {text && <TextSection textSection={text} modifier={textModifier} />}
    {btnText && <Button buttonText={btnText} modifier={btnModifier} />}
  </div>
)

export default Info
