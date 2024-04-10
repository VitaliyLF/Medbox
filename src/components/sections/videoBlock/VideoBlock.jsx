import { urlFor } from '@/app/lib/clientSanity'

const VideoBlock = ({ videoBlockContent }) => {
  const { file, title, poster } = videoBlockContent ?? {}

  const videoUrl = file.asset.url

  const videoType = videoUrl ? `video/${videoUrl.split('.').pop().toLowerCase()}` : ''

  return (
    <section className="videoblock">
      <h2 className="visually-hidden">{title}</h2>
      {videoUrl && (
        <video
          className="videoblock__content"
          poster={poster ? urlFor(poster).url() : ''}
          width="1440"
          height="900"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline>
          <source src={videoUrl} type={videoType} />
        </video>
      )}
    </section>
  )
}

export default VideoBlock
