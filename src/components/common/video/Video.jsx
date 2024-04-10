import { urlFor } from '@/app/lib/clientSanity'

const Video = ({ file, poster }) => {
  const videoUrl = file.asset.url
  const videoType = videoUrl ? `video/${videoUrl.split('.').pop().toLowerCase()}` : ''

  return (
    <div className="video">
      {videoUrl && (
        <video
          className="video__content"
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
    </div>
  )
}

export default Video
