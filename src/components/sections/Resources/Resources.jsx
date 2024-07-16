import ContentModule from '@/components/common/ContentModule/ContentModule'
import ResourcesSwiper from './ResourcesSwiper'

const Resources = ({ resourcesContent }) => {
  const { subtitle, text, linkText, url, list } = resourcesContent ?? {}

  return (
    <section className="resources">
      <div className="resources__container container">
        <ContentModule
          contentClassName="resources__content"
          subtitleModifier="large"
          textModifier="medium"
          subtitle={subtitle}
          text={text}
          url={url}
          linkText={linkText}
        />
        <div className="resources__wrapper">
          <ResourcesSwiper list={list} />
        </div>
      </div>
    </section>
  )
}

export default Resources
