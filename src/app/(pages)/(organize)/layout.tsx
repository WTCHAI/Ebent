import Navigation from "@/components/navigator/navigation";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
