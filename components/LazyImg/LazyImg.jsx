import React, { useEffect, forwardRef, useRef } from 'react'

const LazyImg = forwardRef(({src, ...props }, ref) => {
  if(ref === null) ref = useRef()
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { isIntersecting } = entry

          if (isIntersecting) {
            ref.current.src = src
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "75% 0px",
      }
    );

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return <img ref={ref} {...props}/>
})

export default LazyImg
