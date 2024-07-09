import { PortableText } from 'next-sanity'
import classNames from 'classnames/bind'
import styles from './TextSection.scss'

const TextSection = ({ textSection, modifier }) => {
  if (!textSection) return null

  const cx = classNames.bind(styles)

  const textClassName = cx({
    'text-section': true,
    [`text-section--${modifier}`]: modifier,
  })

  return (
    <div className={textClassName}>
      <PortableText value={textSection} />
    </div>
  )
}

export default TextSection
