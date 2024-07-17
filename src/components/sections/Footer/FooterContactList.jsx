import TextSection from '@/components/common/TextSection/TextSection'
import TitleSection from '@/components/common/TitleSection/TitleSection'
import FooterContactSublist from './FooterContactSublist'

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
        <FooterContactSublist item={item} />
      </li>
    ))}
  </ul>
)

export default FooterContactList
