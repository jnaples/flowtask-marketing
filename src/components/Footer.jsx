import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center justify-between py-16 md:flex-row">
          <Logo className="h-10 w-auto" />
          <nav className="mt-10 text-sm md:mt-0" aria-label="quick links">
            <div className="-my-1 flex flex-col justify-center gap-x-6 text-center md:flex-row md:text-start">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="mailto:contact@getflowtask.com">
                contact@flowtask.com
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://www.facebook.com/getflowtask"
              className="group"
              aria-label="Facebook page"
              target="_blank"
            >
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} FlowTask. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
