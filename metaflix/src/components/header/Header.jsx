import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
        <header>
            <div><span className='brand-title'>METAFLIX</span></div>
            <div>
                <button className='btn-signin'>Sign in</button>
            </div>
        </header>
    </>
  )
}

export default Header