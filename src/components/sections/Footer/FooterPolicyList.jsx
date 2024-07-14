import Link from 'next/link'

const FooterPolicyList = ({ policyList }) => (
  <ul className="footer__policy-list">
    {policyList?.map((link) => (
      <li className="footer__policy-item" key={link._key}>
        <Link className="link link--mint" href={link.url}>
          {link.linkText}
        </Link>
      </li>
    ))}
  </ul>
)

export default FooterPolicyList
