import React, { useEffect, useState } from 'react'
import fetchData from '../../jsFunctionsAndData/fetchData'
import MONTHS from '../../jsFunctionsAndData/months'
import NextPrevDateSection from './NextPrevDateSection'

export default function DateFactsPage({ match }) {
    useEffect(() => {
        fetchDateFact()
    }, [match])

    const [dateFacts, setDateFacts] = useState([])
    const [date, setDate] = useState({})

    const fetchDateFact = async _ => {
        const day = match.params.day
        const month = match.params.month

        setDate({
            day: day,
            month: month,
            monthName: MONTHS[month - 1].name,
        })

        let dateFactsArr = []
        for (let i = 0; i < 15; i++) {
            const fact = await fetchData('date', month, day)
            if (dateFactsArr.some(dateFact => dateFact.text == fact.text)) {
                continue
            } else {
                dateFactsArr = dateFactsArr.concat(fact)
                setDateFacts(dateFactsArr)
            }
        }
    }

    return (
        <>
            <section className="number-info-hero hero">
                <h1 className='hero-heading-large'>{date.monthName} {date.day}.</h1>
            </section>
            <section className="middle-line-section content-section">
                {dateFacts.map((fact, index) => {
                    if (index % 2 == 0) {
                        return (
                            <div className="middle-line-flex-parent small m-bottom-small" key={fact.text}>
                                <div>
                                    <h3 className="section-heading m-bottom-small">{date.monthName} {date.day}. {fact.year}</h3>
                                    <p className="section-p middle-line-section-p">{fact.text}</p>
                                </div>
                                {dateFacts[index + 1] &&
                                    <div>
                                        <h3 className="section-heading m-bottom-small">{date.monthName} {date.day}. {dateFacts[index + 1].year}</h3>
                                        <p className="section-p middle-line-section-p">{dateFacts[index + 1].text}</p>
                                    </div>
                                }
                            </div>
                        )
                    }
                })}
            </section>
            <NextPrevDateSection day={match.params.day} month={match.params.month} />
        </>
    )
}
