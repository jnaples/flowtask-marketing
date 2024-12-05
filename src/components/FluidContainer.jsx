import clsx from 'clsx'

export function FluidContainer({ className, ...props }) {
  return <div className={clsx('mx-auto max-w-7xl', className)} {...props} />
}
