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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mx-auto max-w-xl font-display text-3xl tracking-tight text-white sm:text-4xl">
            Designed to keep you focused in a distracted world
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            FlowTask is built around a simple yet powerful principle: focus on
            one task at a time.
          </p>
          <p className="mt-4 mx-auto max-w-2xl text-lg tracking-tight text-white">
            Unlike traditional to-do lists that bombard you with endless items,
            FlowTask keeps you locked in on the single most important task at
            hand.
          </p>
          <Button href="#pricing" color="white" className="mt-10">
            Try today for free
          </Button>
        </div>
      </Container>
    </section>
  )
}
