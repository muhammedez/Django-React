import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    const [token, setToken] = useState(localStorage.getItem('access'))

    useEffect(() => {
        const checkToken = () => {
            const storedToken = localStorage.getItem('access')
            if (storedToken !== token) {
                setToken(storedToken)
            }
        }

        checkToken()

        const intervalId = setInterval(checkToken, 10)

        return () => clearInterval(intervalId)
    }, [token])

    return (
        <div className='nav-container'>
            <Link to='/'>
                <h2 className='title'>NOTES</h2>
            </Link>
            {token !== null && (
                <Link to='/logout'>
                    <p className='logout'>Logout</p>
                </Link>
            )}
        </div>
    )
}

export default Navbar
