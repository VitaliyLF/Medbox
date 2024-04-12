import classNames from 'classnames/bind'
import styles from './Button.scss'

const cx = classNames.bind(styles)

const Button = ({ buttonText, modifier }) => {
  if (!buttonText) return null

  const className = cx({
    btn: true,
    [`btn--${modifier}`]: modifier
  })

  return (
    <button className={className} type="button">
      {buttonText}
    </button>
  )
}

export default Button
