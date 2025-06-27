import { lazy, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import useEventListener from '@/hooks/useEventListener'
import useMounted from '@/hooks/useMounted'

const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))
const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Section = lazy(() => import('@/components/layouts/Section'))
const ArrowLeftSLineIcon = lazy(() => import('remixicon-react/ArrowLeftSLineIcon'))

export default function HomePage(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  useEventListener('mousemove', (e: Event): void => {
    if (!(e instanceof MouseEvent) || !ref.current) {
      return
    }
    const { clientX, clientY } = e
    ref.current.style.setProperty('--gradientPosition', `${clientX}px ${clientY}px`)
  })

  const mounted: boolean = useMounted()

  return (
    <div
      className={clsx({
        'animate-start': mounted
      })}
    >
      <div
        ref={ref}
        className='cursor-tracking-gradient'
      >
        <Section
          className='flex h-screen flex-col justify-center md:items-center'
          maxWidthClass='md:max-w-screen-md'
        >
          {/* prettier-ignore */}
          <Heading1 className={clsx(
            'animate-fade-in', 
            'text-primary-dark dark:text-white',
            'text-4xl md:text-center md:text-5xl'
            )}
          >
            The page is not available
          </Heading1>
          {/* prettier-ignore */}
          <p
            className={clsx(
              'animate-fade-in',
              'mb-4 text-lg md:text-center md:text-xl'
            )}
          >
            Oh, snap!
          </p>
          <NavLink to='/'>
            <PrimaryButton
              icon={<ArrowLeftSLineIcon />}
              className='animate-bounce pl-1 md:mx-auto'
              inverted
            >
              Go home
            </PrimaryButton>
          </NavLink>
        </Section>
      </div>
    </div>
  )
}
