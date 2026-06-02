'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTranslate = {
    up: 'translate-y-7',
    left: '-translate-x-8',
    right: 'translate-x-10',
    none: '',
  }[direction]

  const visibleTranslate = {
    up: 'translate-y-0',
    left: 'translate-x-0',
    right: 'translate-x-0',
    none: '',
  }[direction]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible
          ? `opacity-100 ${visibleTranslate}`
          : `opacity-0 ${hiddenTranslate}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
