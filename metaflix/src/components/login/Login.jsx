import React from 'react';
import './Login.css'

export function Login() {
    return(
        <form>
            <div className='register-title'>Ready to Watch? Enter your email to create or restart your membership.</div>
            <div className='register'>
                <input type="email" placeholder="Email address" className="email" />
                <button className="btn-start">Get Started
                </button>    
            </div>    
        </form>
    )
}
