const SubtitleSection = ({ subtitleSection, modifier }) => {
  return <h3 className={`subtitle-section subtitle-section--${modifier || ''}`}>{subtitleSection}</h3>
}

export default SubtitleSection
