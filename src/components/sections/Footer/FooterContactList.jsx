import Link from 'next/link'
import TitleSection from '@/components/common/TitleSection/TitleSection'
import TextSection from '@/components/common/TextSection/TextSection'

const FooterContactList = ({ contactList }) => (
  <ul className="footer__contact-list">
    {contactList?.map((item) => (
      <li className="footer__contact-item" key={item._key}>
        {item.title && (
          <TitleSection modifier="footer" animate={false}>
            {item.title}
          </TitleSection>
        )}

        {item.text && <TextSection modifier="footer">{item.text}</TextSection>}

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
