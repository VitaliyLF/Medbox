import { PortableText } from 'next-sanity'
import classNames from 'classnames'

// import classNames from 'classnames/bind'
// import styles from './TextSection.scss'

// const cn = classNames.bind(styles)

const TextSection = ({ textSection, modifier }) => {
  if (!textSection) return null

  const classes = ['text-section']

  if (modifier) {
    classes.push(`text-section--${modifier}`)
  }

  return (
    <div className={classNames(classes)}>
      <PortableText value={textSection} />
    </div>
  )
}

export default TextSection
