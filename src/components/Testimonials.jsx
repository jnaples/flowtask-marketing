import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/public/background-faqs.jpg'
import avatarImage1 from '@/public/avatars/avatar-1.png'
import avatarImage2 from '@/public/avatars/avatar-2.png'
import avatarImage3 from '@/public/avatars/avatar-3.png'
import avatarImage4 from '@/public/avatars/avatar-4.png'
import avatarImage5 from '@/public/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'Our team moves fast and is usually trying to do everything at once. FlowTask helped us focus on one campaign at a time. My team’s results have improved, and I’m hitting deadlines without feeling overwhelmed.',
      author: {
        name: 'Emily Harper',
        role: 'Marketing Director',
        image: avatarImage1,
      },
    },
    {
      content:
        'Switching to single-tasking changed everything. I can focus on one design at a time, which has made my projects cleaner and more efficient.',
      author: {
        name: 'Jake Kemble',
        role: 'UX Designer',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        "I was usually overwhelmed with our team's task management software and juggling a million projects at once. Now, I complete each project faster with zero distractions.",
      author: {
        name: 'Andrew Zhang',
        role: 'Software Engineer',
        image: avatarImage5,
      },
    },
    {
      content:
        'FlowTask helped me stop multitasking during my workday. I now prioritize one thing at a time, making me more present, focused, and a top performer.',
      author: {
        name: 'Shawn Dosal',
        role: 'VP of Sales',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'As a CEO, managing a ton of things was draining. Now, I focus on one thing at a time, and it’s been a game-changer for my productivity.',
      author: {
        name: 'Benjamin Jennes',
        role: 'CEO',
        image: avatarImage3,
      },
    },
    {
      content:
        'Running a business is hectic, but now I can focus on one task at a time. It’s helped me become less stressed and stay on track.',
      author: {
        name: 'Brittany Daugherty',
        role: 'Business Owner',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            How busy professionals are getting more done with less stress
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Discover how FlowTask is helping professionals simplify their
            workflow, stay in control, and finish projects faster.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
