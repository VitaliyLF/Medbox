import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/app/lib/clientSanity'

const ListLine = ({ listLineContent }) => {
  if (!listLineContent) {
    return null
  }

  const { listLineSubtitle, listLineText, listLineLink, listLineItems, listLineImage } = listLineContent

  return (
    <section className="list-line">
      <div className="list-line__container container">
        <div className="list-line__info">
          {listLineSubtitle && <h2 className="list-line__subtitle subtitle-section">{listLineSubtitle}</h2>}
          {listLineText && (
            <div className="list-line__text text-section">
              <PortableText value={listLineText}></PortableText>
            </div>
          )}
          {listLineLink && (
            <Link className="list-line__link btn" href="/">
              {listLineLink}
            </Link>
          )}
        </div>
        <ul className="list-line__items">
          {listLineItems?.map((item, index) => (
            <li className="list-line__item" key={index}>
              {item.listLineItem}
            </li>
          ))}
        </ul>
      </div>
      {listLineImage && (
        <div className="list-line__wave">
          <Image
            className="list-line__image"
            src={urlFor(listLineImage).url()}
            alt=""
            width="1440"
            height="720"
            aria-hidden="true"
          />
        </div>
      )}
    </section>
  )
}

export default ListLine
