'use client'
import { getSignUp } from '@/app/lib/getSignUp'
import { urlFor } from '@/app/lib/clientSanity'
import { decodeAssetId } from '@/utils/sanityDecodeImg'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

const submitTimeOutMs = 2500
let dimensions = null

const SignUp = ({ signUpContent }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitted }
  } = useForm({
    mode: 'onBlur'
  })

  if (!signUpContent) {
    return null
  }

  const { subtitle, image, text } = signUpContent

  if (image && image.asset) {
    dimensions = decodeAssetId(image.asset._ref).dimensions
  }

  const onSubmit = async (data) => {
    try {
      console.log(data)

      await getSignUp(data)

      setTimeout(() => {
        reset({ email: '' })
      }, submitTimeOutMs)
    } catch (error) {
      console.error('Error submitting form:', error.message)
    }
  }

  return (
    <section className="sign-up">
      <div className="sign-up__container container">
        {subtitle && <h2 className="sign-up__subtitle subtitle-section subtitle-section--medium">{subtitle}</h2>}
        {!isSubmitted && (
          <form
            className={`sign-up__form ${!isSubmitted ? 'sign-up__form--animate' : ''}`}
            id="sign-up-form"
            method="post"
            onSubmit={handleSubmit(onSubmit)}>
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
                className={`sign-up__input ${errors.email ? 'sign-up__input--error' : ''}`}
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
