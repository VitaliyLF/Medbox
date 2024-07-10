import Link from 'next/link'
import Details from '../../common/UI/Details/Details'
import TitleSection from '@/components/common/TitleSection/TitleSection'
import SubtitleSection from '@/components/common/SubtitleSection/SubtitleSection'

const Faq = ({ faqContent: { title, subtitle, list, linkText } = {} }) => {
  return (
    <section className="faq">
      <div className="faq__container container">
        <aside className="faq__aside">
          <TitleSection titleSection={title} />
          <SubtitleSection subtitleSection={subtitle} />
        </aside>
        <div className="faq__info">
          <ul className="faq__list">
            {list?.length > 0 &&
              list.map((item, index) => (
                <li className="faq__item" key={item._key}>
                  <Details source={item} isOpen={index === 0} />
                </li>
              ))}
          </ul>
          {Boolean(linkText) && (
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
