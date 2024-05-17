import Head from 'next/head'
import React from 'react'

type Props = {}

export default function HeroSection({}: Props) {
  return (
    <section className='py-[20vh]'> 
        <Head>
            <title>Event management & Event Marketplace with blockchain</title>
        </Head>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Revolutionize Your Event Management with Blockchain Technology</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-700">Seamlessly manage, market, and monetize events with unparalleled security and efficiency.</p>
          <a href="#features" className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition">Get Started</a>
        </div>
    </section>
  )
}