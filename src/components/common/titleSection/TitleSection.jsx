import classNames from 'classnames/bind'
import styles from './TitleSection.scss'

const cx = classNames.bind(styles)

const TitleSection = ({ titleSection, modifier }) => {
  if (!titleSection) return null

  const className = cx({
    'title-section': true,
    [`title-section--${modifier}`]: modifier
  })

  return <h2 className={className}>{titleSection}</h2>
}

export default TitleSection
