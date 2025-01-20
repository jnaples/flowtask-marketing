import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import Script from 'next/script'

export const metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'FlowTask | Focused productivity',
  },
  description: 'Work smarter not harder with single-tasking',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <Script
        id="facebook-pixel"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1094426328466571');
              fbq('track', 'PageView');
            `,
        }}
      />
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
