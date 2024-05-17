import React from 'react'

type Props = {}

export default function Cta({}: Props) {
  return (
    <section id="call-to-action" className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Join Us as an Organizer Partner</h2>
            <p className="mt-4 text-xl md:text-2xl text-gray-700">Ready to revolutionize your event management? Become an organizer partner today!</p>
            <a href="#contact" className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition">Contact Us</a>
        </div>
    </section>
  )
}