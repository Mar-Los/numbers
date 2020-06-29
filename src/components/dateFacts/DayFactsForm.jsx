import React from 'react'
import { withRouter } from 'react-router-dom'

function DayFactsForm(props) {
    let dayInput = React.createRef()

    const handleSubmit = e => {
        e.preventDefault()
        const day = dayInput.current.value
        if (!isNaN(day)) {
            if (!day.includes('.')) {
                if (day <= 31 && day > 0) {
                    props.history.push(`/date-facts/day/${day}`)
                }
            }
        }
    }

    return (
        <form className='vertical-flex' onSubmit={handleSubmit}>
            <h3 className="bg-heading">Day</h3>
            <input placeholder='Day' ref={dayInput} type="text" className="range-input" />
            <input value='Search Day' type="submit" className="submit-btn" />
        </form>
    )
}

export default withRouter(DayFactsForm)