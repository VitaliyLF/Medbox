import classNames from 'classnames/bind'
import styles from './Button.scss'

const Button = ({ buttonText, modifier }) => {
  if (!buttonText) return null

  const cx = classNames.bind(styles)

  const buttonClassName = cx({
    btn: true,
    [`btn--${modifier}`]: modifier,
  })

  return (
    <button className={buttonClassName} type="button">
      {buttonText}
    </button>
  )
}

export default Button
