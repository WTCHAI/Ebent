import React from 'react'

type Props = {}

export default function Feature({}: Props) {
  return (
    <section className="py-[15vh]">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
        <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Blockchain Security</h3>
                <p className="text-gray-700">Secure and transparent transactions powered by blockchain technology.</p>
            </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Event Management Tools</h3>
                <p className="text-gray-700">Comprehensive tools for planning, scheduling, and executing events.</p>
            </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Marketplace for Events</h3>
                <p className="text-gray-700">Discover, buy, and sell event tickets effortlessly on our integrated marketplace.</p>
            </div>
            </div>
        </div>
        </div>
  </section>
  )
}