import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../logo1.svg'

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-child">
                    <h4 className="footer-list-heading">Main pages:</h4>
                    <ul className="footer-list">
                        <li><Link className='footer-link' to='/'>Home</Link></li>
                        <li><Link className='footer-link' to='/date-facts'>Dates</Link></li>
                        <li><Link className='footer-link' to='/year-facts'>Years</Link></li>
                        <li><Link className='footer-link' to='/trivia-facts'>Trivia</Link></li>
                        <li><Link className='footer-link' to='/math-facts'>Math</Link></li>
                    </ul>
                </div>
                <div className="footer-child">
                    <h4 className="footer-list-heading">Concrete number pages:</h4>
                    <ul className="footer-list">
                        <li><Link className='footer-link' to='/date-facts/1/1'>Date facts</Link></li>
                        <li><Link className='footer-link' to='/math-facts/1'>Math facts</Link></li>
                        <li><Link className='footer-link' to='/trivia-facts/1'>Trivia facts</Link></li>
                        <li><Link className='footer-link' to='/year-facts/1'>Year facts</Link></li>
                    </ul>
                </div>
                <div className="footer-child">
                    <img className="logo" src={logo1} alt="logo" />
                    <ul className="footer-list">
                        <li><Link className='footer-link' to='/number-info'>General number info</Link></li>
                        <li><Link className='footer-link' to='/date-facts/1'>Month facts</Link></li>
                        <li><Link className='footer-link' to='/date-facts/day/1'>Day in all months facts</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
