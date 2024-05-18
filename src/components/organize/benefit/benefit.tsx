import React from 'react'

type Props = {}

export default function Benefit({}: Props) {
  return (
    <section id="benefits" className="py-[15vh] ">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Benefits of Using Our Platform</h2>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Enhanced Security</h3>
                        <p className="text-gray-700">Blockchain technology ensures secure transactions and data integrity.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Increased Transparency</h3>
                        <p className="text-gray-700">Transparent processes foster trust and accountability.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-4">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Cost Efficiency</h3>
                        <p className="text-gray-700">Reduce costs with streamlined operations and fewer intermediaries.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}