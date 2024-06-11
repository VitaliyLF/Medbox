import classNames from 'classnames/bind'
import styles from './SubtitleSection.scss'

const cx = classNames.bind(styles)

const SubtitleSection = ({ subtitleSection, modifier }) => {
  if (!subtitleSection) return null

  const subtitleClassName = cx({
    'subtitle-section': true,
    [`subtitle-section--${modifier}`]: modifier
  })

  return <h3 className={subtitleClassName}>{subtitleSection}</h3>
}

export default SubtitleSection
