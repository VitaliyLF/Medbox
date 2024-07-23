'use client'

import TextSection from '@/components/common/TextSection/TextSection'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const StickyListItems = ({ list, setActiveIndex }) => {
  const listItemRefs = useRef([])
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(
    () => {
      listItemRefs.current.forEach((ref, index) => {
        if (index === 0) {
          ref.classList.add('is-active')
        }

        ScrollTrigger.create({
          trigger: ref,
          start: '250px center',
          end: 'bottom 250px',
          toggleClass: 'is-active',
          onUpdate: () => {
            setActiveIndex(index)
            // const images = document.querySelectorAll('.sticky-list__image')

            // images.forEach((image) => {
            //   image.classList.remove('is-active')
            // })

            // images[index].classList.add('is-active')
          },
          // markers: true,
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
            className="sticky-list__item"
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
