import React from 'react'

type Props = {}

export default function LoadingSkeleton({}: Props) {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-primaryBlue rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-primaryBlue rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-4 h-4 bg-primaryBlue rounded-full animate-bounce animation-delay-400"></div>
      </div>
      <p className="mt-8 text-lg font-semibold text-gray-700">Loading, please wait...</p>
    </main>
  )
}