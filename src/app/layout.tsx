import '../styles/global.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ebent marketplace',
  description: 'Blockchain technology is revolutionizing the event marketplace and event management by enhancing security, transparency, and efficiency. It builds trust among all stakeholders and drives the industry towards more innovative and reliable practices. As blockchain adoption grows, its impact on the event industry will continue to expand, creating more opportunities for growth and innovation.'
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}  
      </body>
    </html>
  )
}
