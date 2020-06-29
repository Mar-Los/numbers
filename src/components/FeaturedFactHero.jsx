import React, { useEffect, useState } from 'react'
import fetchData from '../jsFunctionsAndData/fetchData'

export default function FeaturedFactHero(props) {
    useEffect(() => {
        fetchFact()
    }, [])

    const [fact, setFact] = useState('')

    const fetchFact = async _ => {
        const fact = await fetchData(props.type, 'random')
        setFact(fact)
    }

    return (
        <section className='hero homepage-hero'>
            <div className="hero-content">
                <h1 className='hero-heading'>{props.type} Facts</h1>
                <h3 className='hero-subheading'>Featured Fact: {fact.number}</h3>
                <p className="hero-p">
                    {fact.text}
                </p>
            </div>
        </section>
    )
}
