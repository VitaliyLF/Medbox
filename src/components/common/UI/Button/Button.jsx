import classNames from 'classnames/bind'
import styles from './Button.scss'

const Button = ({ children, modifier, ...props }) => {
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
