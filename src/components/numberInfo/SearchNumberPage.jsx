import React from 'react'
import { withRouter } from 'react-router-dom'



function searchNumberPage(props) {
    let input = React.createRef()

    document.title = 'Search A Number'

    const handleSubmit = event => {
        event.preventDefault()
        const value = input.current.value
        input.current.value = ''
        if (!isNaN(value)) {
            if (!value.includes('.')) {
                if (value.length <= 4) {
                    props.history.push(`/number-info/${value}`)
                }
            }
        }
    }

    return (
        <>
            < section className='search-number-hero' >
                <h2 className="hero-heading m-bottom-2">Search A Number</h2>
                <form onSubmit={handleSubmit}>
                    <input className='input-large' autoFocus placeholder='Enter a number...' ref={input} type="text" />
                </form>
            </section >
        </>
    )
}

export default withRouter(searchNumberPage)