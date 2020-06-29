import React, { useEffect, useState } from 'react'
import fetchData from '../jsFunctionsAndData/fetchData'
import DateFactCard from './DateFactCard'
import MONTHS from '../jsFunctionsAndData/months'

export default function DateFactsSection(props) {
    useEffect(() => {
        fetchDateFacts()
    }, [props.number])

    const [monthlyFacts, setMonthlyFacts] = useState([])

    const fetchDateFacts = async _ => {
        const number = props.number



        let monthlyFacts = []
        MONTHS.forEach(async (month, index) => {
            if (month.maxDay >= number) {
                const monthFact = await fetchData('date', index + 1, number)
                monthlyFacts = monthlyFacts.concat({
                    fact: monthFact,
                    month: index + 1,
                    monthString: month.name,
                    day: number
                })
                monthlyFacts.sort(compare)
                setMonthlyFacts(monthlyFacts)
            }
        })
    }
    const compare = (a, b) => {
        if (a.month < b.month) {
            return -1
        }
        if (a.month > b.month) {
            return 1
        }
        return 0
    }

    return (
        props.number <= 31 && props.number > 0 &&
        <section className='content-section middle-line-section'>
            <h2 className='section-heading'>Monthly Facts</h2>
            {monthlyFacts.map((fact, index) => {
                if (index % 2 == 0) {
                    return (
                        <div className="middle-line-flex-parent" key={fact.monthString}>
                            <div>
                                <h3 className="bg-heading">{fact.monthString}</h3>
                                <DateFactCard fact={fact.fact} day={fact.day} month={fact.month} />
                            </div>
                            {monthlyFacts[index + 1] &&
                                <div>
                                    <h3 className="bg-heading">{monthlyFacts[index + 1].monthString}</h3>
                                    <DateFactCard fact={monthlyFacts[index + 1].fact} day={monthlyFacts[index + 1].day} month={monthlyFacts[index + 1].month} />
                                </div>
                            }
                        </div>
                    )
                }
            })}
        </section>
    )
}
