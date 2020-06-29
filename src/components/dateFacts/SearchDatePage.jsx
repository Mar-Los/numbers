import React from 'react'
import DateFactsForm from './DateFactsForm'
import MonthlyFactsForm from './MonthlyFactsForm'
import DayFactsForm from './DayFactsForm'

export default function SearchDatePage() {

    document.title = 'Date Facts'

    return (
        <section className="search-number-hero hero">
            <h1 className="section-heading m-bottom-small">Search a date</h1>
            <p className="section-p">Welcome to the date page. Enter a month, day or a concrete date:</p>
            <div className="two-column-flex date-search-section">
                <MonthlyFactsForm />
                <DateFactsForm />
                <DayFactsForm />
            </div>

        </section>
    )
}
