import React from 'react'
import FactTypesSection from '../FactTypesSection'
import DateFactsSection from '../DateFactsSection'
import NextPrevSection from './NextPrevSection'
import { Redirect } from 'react-router-dom'

export default function NumberInfoPage({ match }) {

    document.title = `Number ${match.params.number}`

    return (
        <>
            {isNaN(match.params.number) &&
                <Redirect to='/number-info' />
            }
            <section className="number-info-hero hero">
                <h1 className="huge-hero-heading">{match.params.number}</h1>
            </section>

            <FactTypesSection number={match.params.number} includeDate={false} />
            <DateFactsSection number={match.params.number} />
            <NextPrevSection number={match.params.number} />
        </>

    )
}
