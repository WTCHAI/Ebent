import Navigation from "@/components/navigator/navigation";
import Footer from "@/components/footer/footer";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
