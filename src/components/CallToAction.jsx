import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '../../public/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Start achieving more today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take back control of your day. Flowtask is your little helper who forces you to focus on thing thing at a time, cut out distractions and sky-rocket productivity.
          </p>
          <Button href="#pricing" color="white" className="mt-10">
            Get started for free
          </Button>
        </div>
      </Container>
    </section>
  )
}
