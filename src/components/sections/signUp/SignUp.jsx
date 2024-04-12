'use client'
import { getSignUp } from '@/app/lib/getSignUp'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'

const submitTimeOutMs = 2500
let dimensions = null

const SignUp = ({ signUpContent }) => {
  const { subtitle, image, text } = signUpContent ?? {}

  if (image && image.asset) {
    dimensions = decodeAssetId(image.asset._ref).dimensions
  }

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid, isSubmitted }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = async (data) => {
    try {
      await getSignUp(data)

      setTimeout(() => {
        reset({ email: '' })
      }, submitTimeOutMs)
    } catch (error) {
      console.error('Error submitting form:', error.message)
    }
  }

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData
    const pastedText = clipboardData.getData('text')

    if (pastedText.length > 50) {
      e.preventDefault()
      const trimmedText = pastedText.substring(0, 50)
      const input = e.target

      setTimeout(() => {
        input.value = trimmedText
        input.dispatchEvent(new Event('input', { bubbles: true }))
      }, 10)

      setError('email', {
        type: 'manual',
        message: 'The text is too long. Maximum 50 characters.'
      })
    }
  }

  return (
    <section className="sign-up">
      <div className="sign-up__container container">
        {subtitle && <h2 className="sign-up__subtitle">{subtitle}</h2>}
        {!isSubmitted && (
          <form className="sign-up__form" id="sign-up-form" method="post" onSubmit={handleSubmit(onSubmit)}>
            <label className="sign-up__label" htmlFor="email">
              <input
                {...register('email', {
                  required: 'Required',
                  maxLength: {
                    value: 50,
                    message: 'Maximum 50 characters'
                  },
                  minLength: {
                    value: 5,
                    message: 'Minimum of 5 characters'
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={classNames('sign-up__input', { 'sign-up__input--error': errors.email })}
                name="email"
                type="email"
                placeholder="Enter your email"
                aria-invalid={!!errors.email}
                aria-required="true"
                aria-label="Enter your email"
                autoComplete="email"
                title="Please enter your email address"
                minLength="1"
                maxLength="50"
                onPaste={handlePaste}
              />
              {errors?.email && <p className="sign-up__error">{errors?.email?.message || 'Required'}</p>}
            </label>
            <button className="sign-up__btn" type="submit" form="sign-up-form" disabled={!isValid}>
              Sign Up
            </button>
          </form>
        )}
        {isSubmitted && (
          <>
            <div className="sign-up__success">
              {image && (
                <Image
                  className="sign-up__success-image"
                  src={urlFor(image).url()}
                  alt="Success form submitted"
                  width={dimensions.width}
                  height={dimensions.height}
                />
              )}
              {text && <p className="sign-up__success-text">{text}</p>}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default SignUp
