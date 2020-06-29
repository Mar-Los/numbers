import React from 'react'
import { Link } from 'react-router-dom'

export default function FactCard(props) {
    return (
        <Link to={`/${props.fact.type}-facts/${props.fact.number}`} className='card'>
            <div className='card-top'>
                <div className="card-top-bar">{props.fact.type}</div>
                <h3 className='card-title'>{props.fact.number}</h3>
            </div>
            <div className='card-bottom'>
                <p>{props.fact.text}</p>
            </div>
        </Link>
    )
}
