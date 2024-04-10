import { PortableText } from 'next-sanity'

const TextSection = ({ textSection, modifier }) => {
  return (
    <div className={`text-section ${modifier ? `text-section--${modifier}` : ''}`}>
      <PortableText value={textSection} />
    </div>
  )
}

export default TextSection
