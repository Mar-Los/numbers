import React, { useState, useEffect } from 'react'
import fetchData from '../jsFunctionsAndData/fetchData'
import FactCard from './FactCard'
import DateFactCard from './DateFactCard'
import { Link } from 'react-router-dom'

export default function FactTypesSection(props) {
    useEffect(() => {
        fetchFacts()
        fetchDateFact()
    }, [props.number])

    const [facts, setFacts] = useState(['', '', ''])
    const [dateFact, setDateFact] = useState({ month: '', day: '', fact: '' })

    const fetchFacts = async _ => {
        const differentFactTypes = ['math', 'trivia', 'year']
        let differentFacts = []
        for (const type of differentFactTypes) {
            const fact = await fetchData(type, props.number, '', '&max=9999')
            differentFacts = differentFacts.concat(fact)
        }
        setFacts(differentFacts)
    }
    const fetchDateFact = async _ => {
        if (!props.includeDate) {
            return
        }
        let rndDateFact = {
            month: Math.ceil(Math.random() * 12),
            day: Math.ceil(Math.random() * 28)
        }
        const fact = await fetchData('date', rndDateFact.month, rndDateFact.day)
        rndDateFact.fact = fact
        setDateFact(rndDateFact)
    }
    const isMathAndTrivia = _ => {
        console.log(props.number)
        if (props.number != 'random') {
            return false
        }
        if (props.number < 0) {
            return false
        }
        return true
    }
    return (
        <section className='content-section'>
            <h2 className='section-heading'>Fact Types</h2>
            <p className="section-lead">
                Visit different fact types - math, trivia, year and date.
            </p>
            {isMathAndTrivia &&
                <>
                    <div className="bg-heading">Math</div>
                    <div className="two-column-flex">
                        <div className="text-column">
                            <p className="section-p">
                                Are you a mathematician? Or just interested in numbers? Come and visit our math facts, for many more of these facts!
                    </p>
                            <Link className='link' to='/math-facts'>Go to math facts</Link>
                        </div>

                        <FactCard fact={facts[0]} />
                    </div>
                    <div className="bg-heading">Trivia</div>
                    <div className="two-column-flex">
                        <FactCard fact={facts[1]} />
                        <div className="text-column">
                            <p className="section-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolore sunt! Animi earum impedit eum aliquam aliquid tempora. Molestiae facere sequi nisi dolore. Sint sunt, blanditiis est alias ratione placeat.
                    </p>
                            <Link className='link' to='/trivia-facts'>Go to trivia facts</Link>
                        </div>
                    </div>
                </>
            }
            <div className="bg-heading">Year</div>
            <div className="two-column-flex">
                <div className="text-column">
                    <p className="section-p">
                        Have you ever wanted to see plenty of year facts on one place? We provide plenty of them and if you are interested in just one year, type it in the upper right search input.
                    </p>
                    <Link className='link' to='/year-facts'>Go to year facts</Link>
                </div>
                <FactCard fact={facts[2]} />
            </div>
            {props.includeDate &&
                <>
                    <div className="bg-heading">Date</div>
                    <div className="two-column-flex">
                        <DateFactCard day={dateFact.day} month={dateFact.month} fact={dateFact.fact} />
                        <div className="text-column">
                            <p className="section-p">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid quibusdam consequatur dolorum similique. Impedit quaerat, ipsum ut dolore tempora inventore. Magnam numquam voluptates dolor laudantium autem, asperiores officiis error?
                    </p>
                            <Link className='link' to='date-facts'>Go to date facts</Link>
                        </div>
                    </div>
                </>
            }
        </section>
    )
}
