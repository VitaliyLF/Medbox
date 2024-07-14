import { PortableText } from 'next-sanity'
import Link from 'next/link'
import SubtitleSection from '@/components/common/SubtitleSection/SubtitleSection'
import TextSection from '@/components/common/TextSection/TextSection'
import FeedbackList from './FeedbackList'

const Feedback = ({
  feedBackContent: { subtitle, text, list, subtext, linkText, url } = {},
}) => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="centered">
          <SubtitleSection subtitleSection={subtitle} />
          <TextSection textSection={text} />
        </div>
        <FeedbackList list={list} />
        <div className="centered">
          {Boolean(subtext) && (
            <div className="feedback__subtext text-section">
              <PortableText value={subtext} />
            </div>
          )}
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
