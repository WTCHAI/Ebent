
import Navigation from "@/components/navigator/navigation";
import Footer from "@/components/footer/footer";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <main className=''>
      <Navigation/>
        {children}
      <Footer/>
    </main>
  )
}
