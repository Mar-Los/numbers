import React from 'react'
import { Link } from 'react-router-dom'
import MONTHS from '../jsFunctionsAndData/months'

export default function FactCard(props) {
    return (
        <Link to={`/date-facts/${props.month}/${props.day}`} className='card'>
            <div className='card-top'>
                <div className="card-top-bar">{MONTHS[props.month - 1].name}</div>
                <h3 className='card-title'>{props.day}.</h3>
            </div>
            <div className='card-bottom'>
                <p>{props.fact.text}</p>
            </div>
        </Link>
    )
}