import Image from 'next/image'
import logo from '../../public/logo-blue.png'
import clsx from 'clsx'

export function Logo({ className }) {
  return (
    <Image
      className={clsx('w-40', className)}
      src={logo}
      alt="logo"
      width={130}
    />
  )
}
