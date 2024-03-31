import { PortableText } from 'next-sanity'
import Link from 'next/link'
import Review from '../review/Review'

const Feedback = ({ feedBackContent }) => {
  if (!feedBackContent) {
    return null
  }

  const { subtitle, text, list, subtext, btnText, url } = feedBackContent

  return (
    <section className="feedback">
      <div className="container">
        <div className="centered">
          {subtitle && <h2 className="subtitle-section">{subtitle}</h2>}
          {text && (
            <div className="text-section">
              <PortableText value={text} />
            </div>
          )}
        </div>
        <ul className="feedback__list">
          {list?.map((item, index) => (
            <li className="feedback__item" key={index}>
              <Review source={item} modifier="feedback" />
            </li>
          ))}
        </ul>
        <div className="centered">
          {subtext && (
            <div className="feedback__subtext text-section">
              <PortableText value={subtext} />
            </div>
          )}
          {btnText && (
            <Link className="btn" href={url} target="_blank" title="Read reviews || New window">
              {btnText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Feedback
