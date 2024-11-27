import Image from 'next/image'
import logo from '@/public/logo-blue.png'

export function Logo() {
  return <Image className="w-full" src={logo} alt="logo" width={140} />
}
