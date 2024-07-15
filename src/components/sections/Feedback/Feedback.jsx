import Link from 'next/link'
import SubtitleSection from '@/components/common/SubtitleSection/SubtitleSection'
import TextSection from '@/components/common/TextSection/TextSection'
import FeedbackList from './FeedbackList'

const Feedback = ({ feedBackContent }) => {
  const { subtitle, text, list, subtext, linkText, url } = feedBackContent ?? {}

  return (
    <section className="feedback">
      <div className="container">
        <div className="centered">
          {subtitle && <SubtitleSection>{subtitle}</SubtitleSection>}
          {text && <TextSection>{text}</TextSection>}
        </div>
        <FeedbackList list={list} />
        <div className="centered">
          {Boolean(subtext) && <TextSection>{subtext}</TextSection>}
          {Boolean(linkText) && (
            <Link
              className="btn"
              href={url}
              target="_blank"
              title="Read reviews || New window">
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Feedback
