import React from 'react'

import './Main.css'
import { Login } from '../login/Login'

export function Main() {
  return (
    <main>
        <div className="main-shade">
            <div className="main-title">Unlimited movies, TV <br/>shows and more</div>
            <div className="main-sub-title">Starts at ₹149. Cancel at any time.</div>
            <div className="loginComponent">
                <Login /> 
            </div>
        </div>    
    </main>
  )
}

