import { urlFor } from '@/app/lib/sanity'

const VideoBlock = ({ videoBlockContent }) => {
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
          playsInline
        >
          <source src={videoBlockContent.videoBlock.asset.url} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default VideoBlock
