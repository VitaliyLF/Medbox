import classNames from 'classnames/bind'
import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  modifier?: string
}

const Button: FC<Props> = ({ children, modifier, ...props }) => {
  const cx = classNames.bind(styles)

  const buttonClassName = cx({
    btn: true,
    [`btn--${modifier}`]: modifier,
  })

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
