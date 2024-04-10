import Link from 'next/link'
import Details from '../../common/details/Details'

const Faq = ({ faqContent }) => {
  if (!faqContent) {
    return null
  }

  const { title, subtitle, list, btnText } = faqContent

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
              <li className="faq__item" key={item._key}>
                <Details source={item} isOpen={index === 0} />
              </li>
            ))}
          </ul>
          {btnText && (
            <Link className="btn" href="#">
              {btnText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Faq
