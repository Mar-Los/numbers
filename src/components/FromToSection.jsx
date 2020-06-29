import React, { useState, useEffect } from 'react'
import fetchData from '../jsFunctionsAndData/fetchData'
import FactCard from './FactCard'

export default function FromToSection(props) {
    let fromInput = React.createRef()
    let toInput = React.createRef()

    useEffect(() => {
        handleInputs()
    }, [])

    const [facts, setFacts] = useState([])

    const handleInputs = async e => {
        if (e) e.preventDefault()
        let from = fromInput.current.value
        let to = toInput.current.value
        if (from == '' || to == '') {
            if (from == '') {
                from = 1
            }
            if (to == '') {
                to = 12
            }
        }
        if (validateInput(from, to)) {
            await fetchFacts(from, to)
        }
    }
    const validateInput = (from, to) => {
        if (!isNaN(to) && !isNaN(from)) {
            if (!String(from).includes('.') && !String(to).includes('.')) {
                if (from < to && to - from <= 30)
                    return true
            }
        }
        return false
    }
    const fetchFacts = async (from, to) => {
        let factsArr = []
        for (let i = from; i <= to; i++) {
            const fact = await fetchData(props.type, i)
            factsArr = factsArr.concat(fact)
            setFacts(factsArr)
        }
    }
    return (
        <section className="content-section">
            <h2 className="section-heading">List The Facts</h2>
            <p className="section-lead">View up to 30 facts at once.</p>
            <form className="horizontal-flex" onSubmit={handleInputs}>
                <input type="text" ref={fromInput} placeholder='From' className="range-input" />
                <input type="text" ref={toInput} placeholder='To' className="range-input" />
                <input value='Show' type="submit" className="submit-btn" />
            </form>
            <section className="card-grid">
                {facts.map(fact => {
                    return <FactCard key={fact.number} fact={fact} />
                })}
            </section>
        </section>
    )
}
