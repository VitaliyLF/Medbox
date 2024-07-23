import Video from '@/components/common/UI/Video/Video'
import { IVideoBlock } from '@/interfaces'

interface Props {
  videoBlockContent: IVideoBlock
}

const VideoBlock = ({ videoBlockContent }: Props) => {
  const { title, file, poster } = videoBlockContent ?? {}

  return (
    <section className="video-block">
      <h2 className="visually-hidden">{title}</h2>
      <Video file={file} poster={poster} />
    </section>
  )
}

export default VideoBlock
