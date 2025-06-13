import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-800 max-w-full m-auto h-1/2 p-2.5 align-middle'>
      <div className='flex h-full p-2.5'><h2>Facebook-connecting the world</h2>
      </div>
      <div>
      <ul className='flex justify-evenly align-middle p-1.5 w-80 h-full'>
      <Link href="/" prefetch={true}><li>home</li></Link>
      <Link href="/about" prefetch={true}><li>about</li></Link>
      <Link href="/contact" prefetch={true}><li>contact</li></Link>
      </ul>
      </div>
    </div>
  )
}

export default Navbar

