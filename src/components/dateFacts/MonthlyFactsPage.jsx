import React, { useEffect, useState } from 'react'
import fetchData from '../../jsFunctionsAndData/fetchData'
import MONTHS from '../../jsFunctionsAndData/months'
import NextPrevMonthSection from './NextPrevMonthSection'
import DayOfMonthFactCard from '../DayOfMonthFactCard'

export default function MonthlyFactsPage({ match }) {
    useEffect(() => {
        fetchMonthlyFacts()
    }, [match])

    const [monthlyFacts, setMonthlyFacts] = useState([])

    const fetchMonthlyFacts = async _ => {
        const month = match.params.month
        let monthlyFacts = []
        for (let i = 1; i <= MONTHS[month - 1].maxDay; i++) {
            const fact = await fetchData('date', month, i)
            monthlyFacts = monthlyFacts.concat({
                day: i,
                fact: fact
            })
            setMonthlyFacts(monthlyFacts)
        }
    }

    return (
        <>
            <section className="number-info-hero hero">
                <h2 className="hero-heading-large">{MONTHS[match.params.month - 1].name}</h2>
            </section>
            <section className='card-grid content-section'>
                {monthlyFacts.map(month => {
                    return <DayOfMonthFactCard key={month.fact.text} fact={month.fact} day={month.day} month={match.params.month} />
                })}
            </section>
            <NextPrevMonthSection month={match.params.month} />
        </>
    )
}
