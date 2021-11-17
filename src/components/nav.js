import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Nav =()=> 
    
            (
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className='nav-link'to='/'>Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        )
export default Nav