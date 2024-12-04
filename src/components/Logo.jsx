import Image from 'next/image'
import logo from '@/public/logo-blue.png'

export function Logo() {
  return <Image className="w-40" src={logo} alt="logo" width={130} />
}
