import React, { useEffect, useState } from 'react'
import fetchData from '../jsFunctionsAndData/fetchData'
import NextPrevFactsListSection from './NextPrevFactsListSection'

export default function NumberFactsListPage({ match }) {
    useEffect(() => {
        fetchDateFact()
    }, [match])

    const [facts, setFacts] = useState([])
    const [type, setType] = useState()

    const fetchDateFact = async _ => {
        const number = match.params.number
        let type = ''

        if (match.path.includes('year')) type = 'year'
        if (match.path.includes('math')) type = 'math'
        if (match.path.includes('trivia')) type = 'trivia'

        setType(type)

        let factsArr = []
        for (let i = 0; i < 15; i++) {
            const fact = await fetchData(type, number)
            if (factsArr.some(item => item.text == fact.text)) {
                continue
            } else {
                factsArr = factsArr.concat(fact)
                setFacts(factsArr)
            }
        }
    }

    return (
        <>
            <section className="number-info-hero hero">
                <h1 className='huge-hero-heading'>{match.params.number}</h1>
            </section>
            <section className="middle-line-section content-section">
                {facts.map((fact, index) => {
                    if (index % 2 == 0) {
                        return (
                            <div className="middle-line-flex-parent small m-bottom-small" key={fact.text}>
                                <div>
                                    <h3 className="section-heading m-bottom-small">{match.params.number}</h3>
                                    <p className="section-p middle-line-section-p">{fact.text}</p>
                                </div>
                                {facts[index + 1] &&
                                    <div>
                                        <h3 className="section-heading m-bottom-small">{match.params.number}</h3>
                                        <p className="section-p middle-line-section-p">{facts[index + 1].text}</p>
                                    </div>
                                }
                            </div>
                        )
                    }
                })}
            </section>
            <NextPrevFactsListSection number={match.params.number} type={type} />
        </>
    )
}
