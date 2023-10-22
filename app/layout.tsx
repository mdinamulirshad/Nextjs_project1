import '../styles/main.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Arman',
  description: 'Practicing Next js',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Navbar/>
          {children}
        </div>

        <div className="footer">

        </div>
      </body>
    </html>
  )
}
