import React from 'react'
import { withRouter } from 'react-router-dom'

function MonthlyFactsForm(props) {
    let monthInput = React.createRef()

    const handleSubmit = e => {
        e.preventDefault()
        const month = monthInput.current.value
        if (!isNaN(month)) {
            if (!month.includes('.')) {
                if (month <= 12 && month > 0) {
                    props.history.push(`/date-facts/${month}`)
                }
            }
        }
    }

    return (
        <form className='vertical-flex' onSubmit={handleSubmit}>
            <h3 className="bg-heading">Month</h3>
            <input placeholder='Month' ref={monthInput} type="text" className="range-input" />
            <input value='Search Month' type="submit" className="submit-btn" />
        </form>
    )
}

export default withRouter(MonthlyFactsForm)