import { urlFor } from '@/app/lib/sanity'

const VideoBlock = ({ videoBlockContent }) => {
  if (!videoBlockContent) {
    return null
  }

  const videoUrl = videoBlockContent.videoBlock.asset.url

  const videoType = (() => {
    const fileExtension = videoUrl.split('.').pop().toLowerCase()
    if (fileExtension === 'mp4') {
      return 'video/mp4'
    } else if (fileExtension === 'webm') {
      return 'video/webm'
    } else {
      return ''
    }
  })()

  const poster = videoBlockContent?.videoBlock?.videoBlockPoster
    ? urlFor(videoBlockContent.videoBlock.videoBlockPoster).url()
    : ''

  return (
    <section className="videoblock">
      <div className="container">
        <video
          className="videoblock__content"
          poster={poster}
          width="1440"
          height="720"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline>
          <source src={videoUrl} type={videoType} />
        </video>
      </div>
    </section>
  )
}

export default VideoBlock
