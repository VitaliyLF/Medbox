import classNames from 'classnames/bind'
import { PortableText, PortableTextBlock } from 'next-sanity'
import { FC } from 'react'
import styles from './TextSection.scss'

interface Props {
  children?: PortableTextBlock[]
  modifier?: string
}

const TextSection: FC<Props> = ({ children, modifier }) => {
  const cx = classNames.bind(styles)

  const textClassName = cx({
    'text-section': true,
    [`text-section--${modifier}`]: modifier,
  })

  return (
    <div className={textClassName}>
      {children && <PortableText value={children} />}
    </div>
  )
}

export default TextSection
