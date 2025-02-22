import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '../../public/background-faqs.jpg'
import avatarImage1 from '../../public/avatars/avatar-1.png'
import avatarImage2 from '../../public/avatars/avatar-2.png'
import avatarImage3 from '../../public/avatars/avatar-3.png'
import avatarImage4 from '../../public/avatars/avatar-4.png'
import avatarImage5 from '../../public/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'Freelancing means juggling multiple projects at once, and I used to feel like I was drowning. FlowTask helps me lock in on one project at a time, and now I deliver better work faster.',
      author: {
        name: 'Emily Wilkinson',
        role: 'Freelance Copywriter',
        image: avatarImage1,
      },
    },
    {
      content:
        'Designing for multiple clients at once was a mess—jumping between projects left me scattered. Now, I focus on one design at a time, and my creativity has never been sharper.',
      author: {
        name: 'Jake Kemble',
        role: 'Freelance Graphic Designer',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'I was usually overwhelmed bouncing between client web designs, making slow progress. Now, my focus is sharp, I work on the most urgent tasks of the day with zero distractions.',
      author: {
        name: 'Andrew Zhang',
        role: 'Freelance Web Designer',
        image: avatarImage5,
      },
    },
    {
      content:
        "Single-tasking changed the way I work. Instead of switching between ad campaigns all day, I give each one my full focus. I'm able to knock out my work in a few hours and have the rest of the day to myself.",
      author: {
        name: 'Shawn Dosal',
        role: 'Freelance Digital Marketer',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'Managing multiple client demands can feel overwhelming. FlowTask keeps me locked in on the most important task, and I finally feel in control of my day.',
      author: {
        name: 'Benjamin Jennes',
        role: 'Freelance Dev',
        image: avatarImage3,
      },
    },
    {
      content:
        'I love the freedom—but I lacked structure. FlowTask helps me focus on what truly moves the needle, so I can work less and enjoy life more.',
      author: {
        name: 'Brittany Daugherty',
        role: 'Freelance Web Designer',
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
            How busy freelancers are getting more done in less time
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Discover how FlowTask is helping others like you simplify their work
            day,self-manage the most important tasks, and finish projects
            faster.
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
