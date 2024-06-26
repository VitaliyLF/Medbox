import Link from 'next/link'
import Details from '../../common/details/Details'
import TitleSection from '@/components/common/titleSection/TitleSection'
import SubtitleSection from '@/components/common/subtitleSection/SubtitleSection'

const Faq = ({ faqContent }) => {
  const { title, subtitle, list, linkText } = faqContent ?? {}

  return (
    <section className="faq">
      <div className="faq__container container">
        <aside className="faq__aside">
          <TitleSection titleSection={title} />
          <SubtitleSection subtitleSection={subtitle} />
        </aside>
        <div className="faq__info">
          <ul className="faq__list">
            {list?.map((item, index) => (
              <li className="faq__item" key={item._key}>
                <Details source={item} isOpen={index === 0} />
              </li>
            ))}
          </ul>
          {linkText && (
            <Link className="btn" href="#">
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Faq
