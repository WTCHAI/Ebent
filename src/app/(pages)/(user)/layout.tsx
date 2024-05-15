
import Navigation from "@/components/navigator/navigation";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <main className=''>
      <Navigation/>
      {children}
    </main>
  )
}
