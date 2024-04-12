import { PortableText } from 'next-sanity'
import classNames from 'classnames/bind'
import styles from './TextSection.scss'

const cx = classNames.bind(styles)

const TextSection = ({ textSection, modifier }) => {
  if (!textSection) return null

  const className = cx({
    'text-section': true,
    [`text-section--${modifier}`]: modifier
  })

  return (
    <div className={className}>
      <PortableText value={textSection} />
    </div>
  )
}

export default TextSection
