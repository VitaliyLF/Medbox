import { useState } from 'react'

const useMenuToggle = () => {
  const [isMenuOpen, setMenuOpen] = useState()

  const toggleMenuVisibility = () => {
    setMenuOpen(!isMenuOpen)
    toggleScroll()
  }

  const toggleScroll = () => {
    const paddingOffset =
      window.innerWidth - document.documentElement.clientWidth
    document.body.classList.toggle('scroll-lock')
    document.body.style.paddingRight = isMenuOpen ? '' : `${paddingOffset}px`
    document.body.style.scrollBehavior = isMenuOpen ? '' : 'unset'
  }

  return {
    isMenuOpen,
    setMenuOpen,
    toggleMenuVisibility,
  }
}
export default useMenuToggle
