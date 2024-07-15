import Link from 'next/link'
import TitleSection from '@/components/common/TitleSection/TitleSection'
import SubtitleSection from '@/components/common/SubtitleSection/SubtitleSection'
import FaqList from './FaqList'

const Faq = ({ faqContent }) => {
  const { title, subtitle, list, linkText } = faqContent ?? {}

  return (
    <section className="faq">
      <h2 className="visually-hidden">Our FAQ’s</h2>
      <div className="faq__container container">
        <aside className="faq__aside">
          {title && <TitleSection>{title}</TitleSection>}
          {subtitle && <SubtitleSection>{subtitle}</SubtitleSection>}
        </aside>
        <div className="faq__info">
          <FaqList list={list} />
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
