import TextSection from '@/components/common/TextSection/TextSection'
import { useGSAP } from '@gsap/react'
import classNames from 'classnames'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const StickyListItems = ({ list, setActiveIndex }) => {
  const listItemRefs = useRef([])
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(
    () => {
      listItemRefs.current.map((ref, index) => {
        ScrollTrigger.create({
          trigger: ref,
          start: '250px center',
          end: 'bottom 250px',
          toggleClass: 'is-active',
          // markers: true,
          onUpdate: () => {
            setActiveIndex(index)
          },
        })
      })
    },
    { scope: listItemRefs },
  )

  return (
    <ul className="sticky-list__items">
      {list?.length > 0 &&
        list?.map((item, index) => (
          <li
            className={classNames('sticky-list__item', {
              'is-active': index === 0,
            })}
            key={item._key}
            ref={(ref) => {
              listItemRefs.current[index] = ref
            }}>
            <h4 className="sticky-list__item-subtitle">{item.title}</h4>
            <TextSection>{item.text}</TextSection>
          </li>
        ))}
    </ul>
  )
}

export default StickyListItems
