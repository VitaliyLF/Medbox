import classNames from 'classnames/bind'
import styles from './SubtitleSection.scss'

const cx = classNames.bind(styles)

const SubtitleSection = ({ subtitleSection, modifier }) => {
  if (!subtitleSection) return null

  const className = cx({
    'subtitle-section': true,
    [`subtitle-section--${modifier}`]: modifier
  })

  return <h3 className={className}>{subtitleSection}</h3>
}

export default SubtitleSection
