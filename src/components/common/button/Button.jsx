const Button = ({ buttonText, modifier }) => {
  return (
    <button className={`btn ${modifier ? `btn--${modifier}` : ''}`} type="button">
      {buttonText}
    </button>
  )
}

export default Button
