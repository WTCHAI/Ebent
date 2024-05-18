import React from 'react'

type Props = {}

export default function Guide({}: Props) {
  return (
    <section id="how-it-works" className="py-[15vh] bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">1</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Sign Up</h3>
            <p className="text-gray-700">Create an account in minutes.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">2</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Create or Join Events</h3>
            <p className="text-gray-700">Start managing your event or explore ongoing events.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">3</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Secure Payments</h3>
            <p className="text-gray-700">Handle transactions securely through blockchain.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4">
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">4</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Grow Your Audience</h3>
            <p className="text-gray-700">Utilize our marketplace to reach more people.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}