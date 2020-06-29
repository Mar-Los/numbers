import React from 'react'
import { Link } from 'react-router-dom'

export default function FactCard(props) {
    return (
        <Link to={`/date-facts/${props.month}/${props.day}`} className='card'>
            <div className='card-top'>
                <div className="card-top-bar">{props.fact.type}</div>
                <h3 className='card-title'>{props.day}. {props.month}.</h3>
            </div>
            <div className='card-bottom'>
                <p>{props.fact.text}</p>
            </div>
        </Link>
    )
}