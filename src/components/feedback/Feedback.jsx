import { PortableText } from 'next-sanity'

const Feedback = ({ feedBackContent }) => {
  if (!feedBackContent) {
    return null
  }

  const { subtitle, text, feedbackList } = feedBackContent

  return (
    <section className="feedback">
      <div className="container">
        {subtitle && <h2 className="subtitle-section">{subtitle}</h2>}
        {text && (
          <div className="text-section">
            <PortableText value={text} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Feedback
