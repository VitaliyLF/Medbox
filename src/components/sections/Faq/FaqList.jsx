import Details from '../../common/UI/Details/Details'

const FaqList = ({ list }) => {
  return (
    <ul className="faq__list">
      {list?.length > 0 &&
        list.map((item, index) => (
          <li className="faq__item" key={item._key}>
            <Details source={item} isOpen={index === 0} />
          </li>
        ))}
    </ul>
  )
}
export default FaqList
