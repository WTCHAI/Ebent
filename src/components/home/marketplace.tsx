import React from 'react'

import Link from 'next/link'

type Props = {}

export default function MarketplaceHome({}: Props) {
  return (
    <section className='py-[20vh]'>
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Event Ticket Marketplace</h2>
            <p className="text-xl text-gray-600 mb-8">Buy and sell event tickets easily on our marketplace.</p>
            <Link href="/marketplace" className="bg-primaryBlue text-white py-2 px-6 rounded-lg hover:bg-darkBlue">
                Visit Marketplace
            </Link>
        </div>
    </section>
)
}