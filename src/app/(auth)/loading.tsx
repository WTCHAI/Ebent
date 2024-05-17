import React from 'react'

type Props = {}

export default function Loading({}: Props) {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="flex justify-center items-center">
        <div className="border-8  border-t-8 border-blue-500 rounded-full w-20 h-20 animate-spin"></div>
      </div>
      <p className="mt-8 text-lg font-semibold text-gray-700">Loading, please wait...</p>
    </main>
  )
}