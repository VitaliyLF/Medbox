const VideoBlock = ({ videoBlockContent }) => {
  return (
    <section className="videoblock">
      <div className="container">
        <video
          className="videoblock__content"
          aria-describedby="video-description-homepage"
          width={320}
          height={240}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="" type="video/webm"></source>
          <source src="" type="video/mp4"></source>
        </video>
        <p className="visually-hidden" id="video-description-homepage">
          hello
        </p>
      </div>
    </section>
  )
}

export default VideoBlock
