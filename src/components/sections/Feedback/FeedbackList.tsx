import { IFeedBackItem } from '@/interfaces'
import Review from '../../common/Review/Review'

interface Props {
  list: IFeedBackItem[]
}

const FeedbackList = ({ list }: Props) => {
  return (
    <ul className="feedback__list">
      {list?.length > 0 &&
        list.map((item) => (
          <li className="feedback__item" key={item._key}>
            <Review source={item} modifier="feedback" />
          </li>
        ))}
    </ul>
  )
}
export default FeedbackList
