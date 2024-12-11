'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import backgroundImage from '../../public/background-features.jpg'
import { FluidContainer } from './FluidContainer'

const features = [
  {
    title: '1.) Add your tasks',
    description:
      'Easily input tasks, from quick to-dos to important work projects, all in one place by clicking the plus sign.',
    video: '/step-1.mp4',
  },
  {
    title: '2.) Organize your tasks',
    description:
      'Rearrange your tasks by priority with a simple drag-and-drop interface to keep your focus in check.',
    video: '/step-2.mp4',
  },
  {
    title: '3.) Unlock focus mode',
    description:
      'Toggle between seeing your entire list or focusing on just one task at a time, designed to give you monk-like focus.',
    video: '/step-3.mp4',
  },
  {
    title: '4.) Mark tasks complete',
    description:
      'Watch your momentum towards success soar, all while staying focused and less stressed.',
    video: '/step-4.mp4',
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <FluidContainer className="relative">
        <div className="flex max-w-3xl flex-col items-center text-center md:mx-auto">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Easily work smarter, stress-free and achieve more
          </h2>
          <p className="mt-6 max-w-2xl text-lg tracking-tight text-blue-100">
            Ditch the chaos of distraction and welcome clarity with arms open.
            Get organized, stay focused, and crush your workday with ease.
          </p>
        </div>
        <TabGroup
          className="ml-auto mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:max-w-[90%] lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:pb-0 md:px-6 lg:col-span-5 lg:px-0">
                <TabList className="relative z-10 flex w-full gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 flex items-center justify-center rounded-4xl bg-slate-200 p-6 shadow-xl shadow-blue-900/20 sm:w-auto md:p-6 lg:mt-0 lg:h-[42rem] lg:rounded-br-none lg:rounded-tr-none lg:p-10 lg:pr-6 xl:p-14">
                      <video
                        className="w-full rounded-xl shadow-xl shadow-slate-900/10 ring-1 ring-slate-500/10"
                        src={feature.video}
                        alt={feature.title}
                        priority
                        sizes="100%"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </FluidContainer>
    </section>
  )
}
