import Link from 'next/link'
import TitleSection from '@/components/common/TitleSection/TitleSection'
import TextSection from '@/components/common/TextSection/TextSection'

const FooterContactList = ({ contactList }) => (
  <ul className="footer__contact-list">
    {contactList?.map((item) => (
      <li className="footer__contact-item" key={item._key}>
        <TitleSection
          titleSection={item.title}
          modifier="footer"
          animate={false}
        />
        <TextSection textSection={item.text} modifier="footer" />
        {item?.sublist && (
          <ul className="footer__contact-sublist">
            <li className="footer__contact-item">
              {item?.sublist?.map((link) => (
                <Link
                  className="link link--light"
                  href={link.url || ''}
                  key={link._key}>
                  {link.linkText}
                </Link>
              ))}
            </li>
          </ul>
        )}
      </li>
    ))}
  </ul>
)

export default FooterContactList
