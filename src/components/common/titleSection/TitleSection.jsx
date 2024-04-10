const TitleSection = ({ titleSection, modifier }) => {
  return <h2 className={`title-section ${modifier ? `title-section--${modifier}` : ''}`}>{titleSection}</h2>
}

export default TitleSection
