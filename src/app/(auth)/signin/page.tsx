import React from 'react';
import Signin from '@/components/authen/signin/Signin';

type Props = {};

export default function Page({}: Props) {

  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <Signin/>
    </main>
  );
}
