import Video from '@/components/common/video/Video'

const VideoBlock = ({ videoBlockContent }) => {
  const { title, file, poster } = videoBlockContent ?? {}

  return (
    <section className="video-block">
      <h2 className="visually-hidden">{title}</h2>
      <Video file={file} poster={poster} />
    </section>
  )
}

export default VideoBlock
