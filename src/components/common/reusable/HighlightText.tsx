import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function HighlightText({ children }: ComponentProps): JSX.Element {
  const ref = useRef<HTMLSpanElement>(null)
  const [degree, setDegree] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDegree((prev) => (prev + 15) % 360)
      if (ref.current) {
        ref.current.style.backgroundImage = `linear-gradient(${degree}deg, var(--tw-gradient-stops))`
      }
    }, 75)
    return () => clearInterval(interval)
  }, [degree])

  return (
    <span
      ref={ref}
      className={clsx(
        'from-teal-400 to-cyan-700 bg-clip-text',
        'dark:from-emerald-200 dark:to-teal-500',
        'text-transparent transition'
      )}
    >
      {children}
    </span>
  )
}
