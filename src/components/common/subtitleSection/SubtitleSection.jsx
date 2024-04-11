const SubtitleSection = ({ subtitleSection, modifier }) => {
  if (!subtitleSection) return null

  return <h3 className={`subtitle-section ${modifier ? ` subtitle-section--${modifier}` : ''}`}>{subtitleSection}</h3>
}

export default SubtitleSection
