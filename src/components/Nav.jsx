import React from 'react'
import logo1 from '../logo1.svg'
import { Link, withRouter } from 'react-router-dom'


function Nav(props) {
    let input = React.createRef()

    const handleSubmit = event => {
        event.preventDefault()
        const value = input.current.value
        input.current.value = ''
        if (!isNaN(value)) {
            if (!value.includes('.')) {
                if (value.length <= 4) {
                    props.history.push(`/number-info/${value}`)
                }
            }
        }
    }
    const toggleMenu = _ => {
        const icon = document.querySelector('.nav-menu')
        const arrow = document.querySelector('.menu-arrow')
        const menu = document.querySelector('.nav-links')
        icon.classList.toggle('active')
        arrow.classList.toggle('active')
        menu.classList.toggle('active')
    }
    const closeNav = _ => {
        const menu = document.querySelector('.nav-links')
        menu.classList.remove('active')
    }

    return (
        <nav>
            <img className="logo" src={logo1} alt="logo" />
            <ul className="nav-links">
                <Link className='nav-link' onClick={closeNav} to='/'>Home</Link>
                <Link className='nav-link' onClick={closeNav} to='/date-facts'>Dates</Link>
                <Link className='nav-link' onClick={closeNav} to='/year-facts'>Years</Link>
                <Link className='nav-link' onClick={closeNav} to='/trivia-facts'>Trivia</Link>
                <Link className='nav-link' onClick={closeNav} to='/math-facts'>Math</Link>
                <form className='nav-form' onSubmit={handleSubmit}>
                    <input placeholder='Enter a number...' ref={input} type="text" />
                </form>
            </ul>
            <svg className='nav-menu' viewBox="0 0 500 375" onClick={toggleMenu}>
                <rect width="500px" height="75" rx="37.5" fill="#00a8e8" />
                <rect y="150" width="500px" height="75" rx="37.5" fill="#00a8e8" />
                <rect y="300" width="500px" height="75" rx="37.5" fill="#00a8e8" />
            </svg>
            <svg className='menu-arrow' onClick={toggleMenu} viewBox="0 0 198.57 98.64">
                <title>close menu</title>
                <path d="M0,49.76a1,1,0,0,0,1,1H196c.55,0,.73.36.4.8l-34,45.32c-.33.44-.6.35-.6-.2V1c0-.55.27-.64.6-.2l34,45.32c.33.44.15.8-.4.8H1a1,1,0,0,0-1,1Z" transform="translate(1 0.48)" stroke="#007ea7" fill='none' stroke-miterlimit="10" stroke-width="5" />
            </svg>
        </nav>
    )
}

export default withRouter(Nav)