'use client';
import React, { useState, useEffect } from 'react';
import Signin from '@/components/authen/signin/Signin';
import Loading from '@/styles/ui/loading'; // Import your Loading component

type Props = {};

export default function Page({}: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <main className='w-full h-full overflow-hidden'>
      {isLoading ? <Loading /> : <Signin />}
    </main>
  );
}
