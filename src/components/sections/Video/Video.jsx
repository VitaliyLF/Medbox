import Video from '@/components/common/UI/Video/Video'

const VideoBlock = ({ videoBlockContent: { title, file, poster } = {} }) => {
  return (
    <section className="video-block">
      <h2 className="visually-hidden">{title}</h2>
      <Video file={file} poster={poster} />
    </section>
  )
}

export default VideoBlock
