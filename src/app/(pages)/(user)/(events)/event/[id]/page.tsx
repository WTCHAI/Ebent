'use client'
import { useRouter } from 'next/router'

import React from 'react'


type Props = {}

export default function Page({}: Props) {
    const router = useRouter()
    return (
        <p>Post: {router.query.id}</p>
    )
  
}