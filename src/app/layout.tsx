import '../styles/global.css'
import type { Metadata } from 'next'
import { Libre_Baskerville } from 'next/font/google'

const Libre = Libre_Baskerville({
  weight: [ '400', '700' ],
  style: 'normal',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Ebent marketplace',
  description: 'Blockchain technology is revolutionizing the event marketplace and event management by enhancing security, transparency, and efficiency. It builds trust among all stakeholders and drives the industry towards more innovative and reliable practices. As blockchain adoption grows, its impact on the event industry will continue to expand, creating more opportunities for growth and innovation.'
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={Libre.className}>
        
        {children}  
      </body>
    </html>
  )
}
