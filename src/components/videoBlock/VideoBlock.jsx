import { urlFor } from '@/app/lib/clientSanity'

const VideoBlock = ({ videoBlockContent }) => {
  if (!videoBlockContent) {
    return null
  }

  const { videoFile, videoBlockHiddenTitle, videoBlockPoster } = videoBlockContent

  const videoUrl = videoFile.asset.url

  const videoType = videoUrl ? `video/${videoUrl.split('.').pop().toLowerCase()}` : ''

  return (
    <section className="videoblock">
      <h2 className="visually-hidden">{videoBlockHiddenTitle}</h2>
      {videoUrl && (
        <video
          className="videoblock__content"
          poster={videoBlockPoster ? urlFor(videoBlockPoster).url() : ''}
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
