import classNames from 'classnames/bind'
import styles from './SubtitleSection.scss'

const SubtitleSection = ({ children, modifier }) => {
  const cx = classNames.bind(styles)

  const subtitleClassName = cx({
    'subtitle-section': true,
    [`subtitle-section--${modifier}`]: modifier,
  })

  return <h3 className={subtitleClassName}>{children}</h3>
}

export default SubtitleSection
