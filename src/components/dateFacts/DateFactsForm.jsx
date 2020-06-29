import React from 'react'
import { withRouter } from 'react-router-dom'
import MONTHS from '../../jsFunctionsAndData/months'


function DateFactsForm(props) {
    let monthInput = React.createRef()
    let dayInput = React.createRef()

    const handleSubmit = e => {
        e.preventDefault()
        const day = dayInput.current.value
        const month = monthInput.current.value
        if (!isNaN(day) && !isNaN(month)) {
            if (!day.includes('.') && !month.includes('.')) {
                if (month <= 12 && month > 0) {
                    if (day > 0 && day <= MONTHS[month - 1].maxDay) {
                        props.history.push(`/date-facts/${month}/${day}`)
                    }
                }
            }
        }
    }

    return (
        <form className='vertical-flex' onSubmit={handleSubmit}>
            <h3 className="bg-heading">Date</h3>
            <input placeholder='Day' ref={dayInput} type="text" className="range-input" />
            <input placeholder='Month' ref={monthInput} type="text" className="range-input" />
            <input value='Search Date' type="submit" className="submit-btn" />
        </form>
    )
}

export default withRouter(DateFactsForm)
