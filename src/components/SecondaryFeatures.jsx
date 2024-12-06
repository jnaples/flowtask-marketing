'use client'

import { useId } from 'react'
import { Tab, TabGroup, TabList } from '@headlessui/react'

import { Container } from '@/components/Container'
import screenshotContacts from '../../public/screenshots/contacts.png'
import screenshotInventory from '../../public/screenshots/inventory.png'
import screenshotProfitLoss from '../../public/screenshots/profit-loss.png'

const features = [
  {
    name: '',
    summary: 'Effortlessly easy to use',
    description:
      'No learning curve. Start improving your productivity immediately.',
    image: screenshotProfitLoss,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: '',
    summary: 'Built to keep you focused',
    description:
      'Distraction-free design that simplifies your day and helps you achieve more.',
    image: screenshotInventory,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: '',
    summary: 'Simplify your day',
    description:
      'Stay stress-free by hiding your other tasks and focusing on just one at a time.',
    image: screenshotContacts,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
]

function Feature({ feature, className, ...props }) {
  return (
    <div className="" {...props}>
      <div className="w-9 rounded-lg bg-blue-600">
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3 className="mt-6 text-sm font-medium text-blue-600">{feature.name}</h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <div className="mt-20 lg:block">
      <div className="flex flex-col gap-x-8 gap-y-10 md:grid md:grid-cols-3">
        {features.map((feature) => (
          <Feature
            key={feature.summary}
            feature={{
              ...feature,
              name: (
                <div className="ui-not-focus-visible:outline-none">
                  {feature.name}
                </div>
              ),
            }}
            className="relative"
          />
        ))}
      </div>
    </div>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="py-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Your new secret to success
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            FlowTask allows you to focus on one thing, do it better, and
            sky-rocket your productivity because multitasking is just another
            word for distraction.
          </p>
        </div>
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
