import React from 'react'
import DateFactsSection from '../DateFactsSection'
import NextPrevDaySection from './NextPrevDaySection'

export default function DayFactsPage({ match }) {
    return (
        <>
            <section className="number-info-hero hero">
                <h2 className="huge-hero-heading">{match.params.day}.</h2>
            </section>
            <DateFactsSection number={match.params.day} />
            <NextPrevDaySection day={match.params.day} />
        </>
    )
}
