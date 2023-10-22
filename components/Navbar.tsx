import React from 'react'
import Link from 'next/link'
import '../styles/navbar.css'


function Navbar() {
  return (
    <div className="nav">
            <div className="nav-left">
              <h2 className='logo'>LeadCom</h2>
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
  )
}

export default Navbar