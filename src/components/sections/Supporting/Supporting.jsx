import SubtitleSection from '@/components/common/SubtitleSection/SubtitleSection'
import TitleSection from '@/components/common/TitleSection/TitleSection'
import SupportingList from './SupportingList'

const Supporting = ({ supportingContent }) => {
  const { title, subtitle, list } = supportingContent ?? {}

  return (
    <section className="supporting">
      <div className="container">
        <div className="centered">
          {title && <TitleSection>{title}</TitleSection>}
          {subtitle && <SubtitleSection>{subtitle}</SubtitleSection>}
        </div>
        <SupportingList list={list} />
      </div>
    </section>
  )
}

export default Supporting
