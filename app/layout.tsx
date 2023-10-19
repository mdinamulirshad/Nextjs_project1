import '../styles/main.css'
import Link from 'next/link'

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
        <div className="nav">
            <div className="nav-left">
              <h2>Ecomm</h2>
            </div>
            <div className="nav-right">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/category">Category</Link></li>
                <li><Link href="/cart">Cart</Link></li>
                <li><Link href="/login">Login</Link></li>
              </ul>
            </div>
        </div>
        <div className="app">
          {children}
        </div>

        <div className="footer">

        </div>
      </body>
    </html>
  )
}
