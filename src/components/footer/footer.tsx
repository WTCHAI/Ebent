import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bg-white py-8">
    <div className="container mx-auto px-4 text-center">        
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-primaryBlue mx-2 hover:underline">Privacy Policy</a>
          <a href="#" className="text-primaryBlue mx-2 hover:underline">Terms of Service</a>
        </div>
    </div>
  </footer>
  )
}