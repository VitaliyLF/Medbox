import { PortableText } from '@portabletext/react'
import Link from 'next/link'

const ListLine = ({ listLineContent }) => {
  return (
    <section className="list-line">
      <div className="list-line__container container">
        <div className="list-line__info">
          {listLineContent.listLine.listLineSubtitle && (
            <h2 className="list-line__subtitle subtitle-section">{listLineContent.listLine.listLineSubtitle}</h2>
          )}
          {listLineContent.listLine.listLineText && (
            <div className="list-line__text text-section">
              <PortableText value={listLineContent.listLine.listLineText}></PortableText>
            </div>
          )}
          {listLineContent.listLine.listLineLink && (
            <Link className="list-line__link btn" href="/">
              {listLineContent.listLine.listLineLink}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default ListLine
