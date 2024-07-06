import classNames from 'classnames/bind'
import styles from './SubtitleSection.scss'

const SubtitleSection = ({ subtitleSection, modifier }) => {
  if (!subtitleSection) return null

  const cx = classNames.bind(styles)

  const subtitleClassName = cx({
    'subtitle-section': true,
    [`subtitle-section--${modifier}`]: modifier,
  })

  return <h3 className={subtitleClassName}>{subtitleSection}</h3>
}

export default SubtitleSection
