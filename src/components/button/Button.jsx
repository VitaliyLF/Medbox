const Button = ({ buttonText, modifier }) => {
  return (
    <button className={`btn btn--${modifier || ''}`} type="button">
      {buttonText}
    </button>
  )
}

export default Button
