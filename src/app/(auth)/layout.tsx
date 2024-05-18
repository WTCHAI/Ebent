
export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <main className='overflow-x-hidden h-[100vh] w-[100vw]'>
      {children}  
    </main>
  )
}
