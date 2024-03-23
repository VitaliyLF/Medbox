const StickyList = ({ stickyListContent }) => {
  if (!stickyListContent) {
    return null
  }

  const { stickyListTitle, stickyListSubtitle } = stickyListContent

  return (
    <section className="sticky-list">
      <div className="container">
        <div className="sticky-list__top">
          {stickyListTitle && <h2 className="title-section">{stickyListTitle}</h2>}
          {stickyListSubtitle && <h3 className="subtitle-section">{stickyListSubtitle}</h3>}
        </div>
      </div>
    </section>
  )
}

export default StickyList
