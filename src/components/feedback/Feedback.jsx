import { PortableText } from 'next-sanity'

const Feedback = ({ feedBackContent }) => {
  if (!feedBackContent) {
    return null
  }

  const { feedbackSubtitle, feedbackText, feedbackList } = feedBackContent

  console.log(feedbackList)

  return (
    <section className="feedback">
      <div className="container">
        {feedbackSubtitle && <h2 className="subtitle-section">{feedbackSubtitle}</h2>}
        {feedbackText && (
          <div className="text-section">
            <PortableText value={feedbackText} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Feedback
