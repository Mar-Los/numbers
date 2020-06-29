import React, { useEffect, useState } from 'react'
import fetchData from '../../jsFunctionsAndData/fetchData.js'
import FactCard from '../FactCard'

export default function TodaysFacts() {

    useEffect(() => {
        fetchFacts()
        getCurrentTime()
    }, [])

    const [facts, setFacts] = useState([])
    const [time, setTime] = useState()

    const getCurrentTime = _ => {
        const m = new Date();
        const dateString = `
            ${('0' + m.getHours()).slice(-2)}:${('0' + m.getMinutes()).slice(-2)}
            ${m.getDate()}. ${m.getMonth() + 1}. ${m.getFullYear()}`
        setTime(dateString)
    }

    const fetchFacts = async _ => {
        const now = new Date()
        const currentTimeArray = [
            {
                unit: 'Minutes',
                value: now.getMinutes()
            },
            {
                unit: 'Hours',
                value: now.getHours()
            },
            {
                unit: 'Day',
                value: now.getDate()
            },
            {
                unit: 'Month',
                value: now.getMonth() + 1
            },
            {
                unit: 'Year',
                value: now.getFullYear()
            }
        ]
        const types = ['math', 'trivia', 'year']

        let todaysFacts = []
        for (const time of currentTimeArray) {
            const randomType = types[Math.floor(Math.random() * 2)]
            const data = await fetchData(randomType, time.value)
            todaysFacts = todaysFacts.concat({
                heading: time.unit,
                data: data
            })
            setFacts(todaysFacts)
        }

    }

    return (
        <section className='content-section'>
            <h2 className='section-heading'>Current Facts</h2>
            <p className="section-lead">The time is<i>{time}</i></p>
            <section className="middle-line-section">
                {facts.map((fact, index) => {
                    if (index % 2 == 0) {
                        return (
                            <div className="middle-line-flex-parent" key={fact.heading}>
                                <div>
                                    <h3 className="bg-heading">{fact.heading}</h3>
                                    <FactCard fact={fact.data} />
                                </div>
                                {facts[index + 1] &&
                                    <div>
                                        <h3 className="bg-heading">{facts[index + 1].heading}</h3>
                                        <FactCard fact={facts[index + 1].data} />
                                    </div>
                                }
                            </div>
                        )
                    }
                })}
            </section>
        </section >
    )
}
