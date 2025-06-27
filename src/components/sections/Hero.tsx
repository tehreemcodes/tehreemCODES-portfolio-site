import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const ArrowDownSLineIcon = lazy(() => import('remixicon-react/ArrowDownSLineIcon'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))
const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline'))
const HighlightText = lazy(() => import('@/components/common/reusable/HighlightText'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Hero(): JSX.Element {
  const { animationClass } = useFadeInMounted()
  const scrollToProjects = (): void => window.location.assign('#projects')

  return (
    <Section
      className={clsx(animationClass, 'flex h-[88vh] min-h-[480px] flex-col justify-between')}
    >
      <div className='flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6'>
        <h2 className={clsx('animate-fade-in', 'text-xl sm:text-2xl lg:text-3xl')}>
          Hey 👋, I'm{' '}
          <SlidingInUnderline
            type='secondary'
            height='lg'
          >
            Tehreem Zafar.
          </SlidingInUnderline>
        </h2>
        <h1
          className={clsx(
            'animate-fade-in !delay-200',
            'text-3xl sm:text-5xl lg:text-6xl',
            'break-words font-extrabold tracking-tight'
          )}
        >
          Frontend to Backend, Design to Deployment . Building <HighlightText>real systems</HighlightText>.
        </h1>
        
        <p
          className={clsx(
            'animate-fade-in !delay-300',
            'text-muted-dark dark:text-muted',
            'sm:text-lg lg:text-xl',
            'pb-0'
          )}
        >
          Most developers build websites. Few build systems. I do both. <br></br>Turning ideas into scalable, secure products.
        </p>
        <SocialMediaLinks className={clsx('animate-fade-in !delay-500', 'mt-6')} />
      </div>
      <PrimaryButton
        className='mx-auto animate-bounce'
        icon={<ArrowDownSLineIcon />}
        onClick={scrollToProjects}
      >
        Explore My Projects
      </PrimaryButton>
    </Section>
  )
}
