import clsx from 'clsx'

export function FluidContainer({ className, ...props }) {
  return (
    <div
      className={clsx('w-full px-4 sm:pl-6 lg:pl-8 lg:pr-0', className)}
      {...props}
    />
  )
}
