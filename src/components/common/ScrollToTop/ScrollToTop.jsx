import Link from 'next/link'

const ScrollToTop = () => {
  const ScrollIcon = () => (
    <svg
      className="scroll-link__icon"
      width="30"
      height="39"
      viewBox="0 0 30 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2756 4.53825L16.2756 37.3316C16.2756 38.1269 15.6309 38.7716 14.8356 38.7716C14.0403 38.7716 13.3956 38.1269 13.3956 37.3316L13.3956 4.53826L2.83225 13.9279C2.23784 14.4562 1.32765 14.4027 0.799292 13.8083C0.27093 13.2139 0.32447 12.3037 0.918877 11.7753L12.6033 1.38918C13.8764 0.257575 15.7948 0.257575 17.0678 1.38918L28.7522 11.7753C29.3466 12.3037 29.4002 13.2139 28.8718 13.8083C28.3435 14.4027 27.4333 14.4562 26.8389 13.9279L16.2756 4.53825Z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <Link className="scroll-link" href="#scroll-to-top" title="Scroll to top">
      <ScrollIcon />
      Scroll to top
    </Link>
  )
}
export default ScrollToTop
