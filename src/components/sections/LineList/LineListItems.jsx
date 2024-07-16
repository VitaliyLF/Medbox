const LineListItems = ({ list }) => {
  return (
    <ul className="line-list__items">
      {list?.length > 0 &&
        list.map((item) => (
          <li className="line-list__item" key={item._key}>
            {item.content}
          </li>
        ))}
    </ul>
  )
}
export default LineListItems
