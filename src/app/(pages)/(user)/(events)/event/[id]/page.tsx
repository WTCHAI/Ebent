'use client'
import React from 'react'

import { useParams } from 'next/navigation'

type Props = {}

export default function Page({}: Props) {
    const param = useParams()
    

  return (
    <div>page {param.id}</div>
  )
}