import React from 'react'

type Props = {}

export default function loading({}: Props) {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="border-8 border-gray-300 border-t-8 border-blue-500 rounded-full w-20 h-20 animate-spin"></div>
    </main>
  )
}