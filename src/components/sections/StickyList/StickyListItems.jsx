'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import TextSection from '@/components/common/TextSection/TextSection'
import classNames from 'classnames/bind'

const StickyListItems = ({ list }) => {
  const listItemRefs = useRef({})

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    Object.values(listItemRefs.current).forEach((listItem, index) => {
      if (listItem) {
        ScrollTrigger.create({
          trigger: listItem,
          start: 'bottom center',
          end: '200px 15%',
          onEnter: () => listItem.classList.add('is-active'),
          onLeave: () => listItem.classList.remove('is-active'),
          onEnterBack: () => listItem.classList.add('is-active'),
          onLeaveBack: () => {
            if (index !== 0) {
              listItem.classList.remove('is-active')
            }
          },
        })
      }
    })
  }, [Object.keys(listItemRefs.current)])

  return (
    <ul className="sticky-list__items">
      {list?.length > 0 &&
        list?.map((item) => (
          <li
            className={classNames('sticky-list__item', {
              'is-active': item._key === list[0]._key,
            })}
            key={item._key}
            ref={(el) => (listItemRefs.current[item._key] = el)}>
            <h4 className="sticky-list__item-subtitle">{item.title}</h4>
            <TextSection>{item.text}</TextSection>
          </li>
        ))}
    </ul>
  )
}
export default StickyListItems
