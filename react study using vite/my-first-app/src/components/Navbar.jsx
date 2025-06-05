import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className='imgl'><a href="#"><img src="public/vite.svg" alt="" /></a></li>
          <li className='x'>Home
            <ul className='drp1'>
              <li>products</li>
              <li>sign-in</li>
              <li>register</li>
            </ul>
          </li>
          <li className='y'>about
            <ul className='drp2'>
              <li>our mission</li>
              <li>our vision</li>
              <li>our history</li>
            </ul>
          </li>
          <li className='z'>contact
            <ul className="drp3">
              <li>head office</li>
              <li>main office</li>
              <li>main offices</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
