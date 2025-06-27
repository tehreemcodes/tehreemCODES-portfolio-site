import { lazy } from 'react'
import clsx from 'clsx'
import PrimaryButtonProps from '@/types/components/buttons/PrimaryButtonProps'

const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline'))

export default function PrimaryButton({
  className,
  onClick,
  icon,
  children,
  inverted,
  active
}: PrimaryButtonProps): JSX.Element {
  return (
    <button
      className={clsx(
        className,
        'group/underline flex w-fit items-center transition duration-300 ease-in-out',
        {
          'font-extrabold text-primary-dark dark:text-white': active,
          'font-semibold': !active
        },
        {
          'rounded-xl px-3 py-1': inverted,
          'text-primary-dark dark:text-primary-light': inverted,
          'hover:bg-primary-dark/5 dark:hover:bg-primary-light/5': inverted && !active,
          'hover:text-primary-dark dark:hover:text-primary-light': !inverted && !active
        }
      )}
      onClick={onClick}
    >
      {icon && <div className='pe-1'>{icon}</div>}
      {!active && <SlidingInUnderline type='secondary'>{children}</SlidingInUnderline>}
      {active && children}
    </button>
  )
}
