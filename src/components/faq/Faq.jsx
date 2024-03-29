import Details from '../details/details'

const Faq = ({ faqContent }) => {
  if (!faqContent) {
    return null
  }

  const { title, subtitle, list } = faqContent

  return (
    <section className="faq">
      <div className="faq__container container">
        <aside className="faq__aside">
          {title && <h2 className="title-section">{title}</h2>}
          {subtitle && <h3 className="subtitle-section subtitle-section--large">{subtitle}</h3>}
        </aside>
        <div className="faq__info">
          <ul className="faq__list">
            {list?.map((item, index) => (
              <li className="faq__item" key={index}>
                <Details source={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Faq
