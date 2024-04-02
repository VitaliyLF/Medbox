'use client'
import { useForm } from 'react-hook-form'

const SignUp = ({ signUpContent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  if (!signUpContent) {
    return null
  }

  const { subtitle } = signUpContent

  const submit = (data) => {
    console.log(data)
  }

  const error = (data) => {
    console.log(data)
  }

  return (
    <section className="sign-up">
      <div className="sign-up__container container">
        {subtitle && <h2 className="sign-up__subtitle subtitle-section subtitle-section--medium">{subtitle}</h2>}
        <form className="sign-up__form" id="sign-up-form" method="post" onSubmit={handleSubmit(submit, error)}>
          <label className="sign-up__label" htmlFor="email">
            <input
              {...register('email', {
                required: true,
                maxLength: 50,
                minLength: 1,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              className={`sign-up__input ${errors.email ? 'sign-up__input--error' : ''}`}
              name="email"
              type="email"
              placeholder="Enter your email"
              aria-invalid={!!errors.email}
              aria-required="true"
              aria-label="Enter your email"
              autoComplete="email"
              title="Please enter your email address"
              maxLength="50"
            />
          </label>
          <button className="sign-up__btn" type="submit" form="sign-up-form">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  )
}

export default SignUp
