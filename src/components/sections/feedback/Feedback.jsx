import { PortableText } from 'next-sanity'
import Link from 'next/link'
import Review from '../../common/review/Review'
import SubtitleSection from '@/components/common/subtitleSection/SubtitleSection'
import TextSection from '@/components/common/textSection/TextSection'

const Feedback = ({ feedBackContent }) => {
  const { subtitle, text, list, subtext, linkText, url } = feedBackContent ?? {}

  return (
    <section className="feedback">
      <div className="container">
        <div className="centered">
          <SubtitleSection subtitleSection={subtitle} />
          <TextSection textSection={text} />
        </div>
        <ul className="feedback__list">
          {list?.map((item) => (
            <li className="feedback__item" key={item._key}>
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
          {linkText && (
            <Link className="btn" href={url} target="_blank" title="Read reviews || New window">
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Feedback
