import TitleSection from '@/components/common/TitleSection/TitleSection'
import SubtitleSection from '@/components/common/SubtitleSection/SubtitleSection'
import SupportingList from './SupportingList'

const Supporting = ({ supportingContent: { title, subtitle, list } = {} }) => {
  return (
    <section className="supporting">
      <div className="container">
        <div className="centered">
          <TitleSection titleSection={title} />
          <SubtitleSection subtitleSection={subtitle} />
        </div>
        <SupportingList list={list} />
      </div>
    </section>
  )
}

export default Supporting
