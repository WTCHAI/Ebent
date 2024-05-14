
export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <main className='overflow-x-hidden h-screen w-screen'>
      {children}  
    </main>
  )
}
