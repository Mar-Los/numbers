import React, { useEffect, useState } from 'react'
import arrowRight from '../../arrow-right.svg'
import arrowLeft from '../../arrow-left.svg'
import { Link } from 'react-router-dom'
import MONTHS from '../../jsFunctionsAndData/months'

export default function NextPrevSection(props) {
    useEffect(() => {
        setNextPrevDate()
    }, [props])

    const [next, setNext] = useState({})
    const [prev, setPrev] = useState({})

    const setNextPrevDate = _ => {
        const day = Number(props.day)
        const month = Number(props.month)
        if (day == 1 && month != 1) {
            setPrev({
                day: MONTHS[month - 2].maxDay,
                month: month - 1
            })
            setNext({ day: day + 1, month: month })

        } else if (day == MONTHS[month - 1].maxDay) {
            setNext({
                day: 1,
                month: month + 1
            })
            setPrev({ day: day - 1, month: month })

        } else {
            setNext({ day: day + 1, month: month })
            setPrev({ day: day - 1, month: month })
        }
    }

    return (
        <section className="content-section no-p">
            <h2 className="section-heading-large">See Other Dates!</h2>
            <div className="three-column-flex smaller-middle-div">
                {(prev.day != 0) ? (
                    <Link to={`/date-facts/${prev.month}/${prev.day}`} className="next-prev-column prev">
                        <h2 className="section-heading">Prev</h2>
                        <img className='arrow' src={arrowLeft} alt="prev" />¨
                    <h2 className="large-number">{prev.day}. {prev.month}.</h2>
                    </Link>
                ) : (
                        <div></div>
                    )}

                <div></div>
                {next.month != 13 &&
                    <Link to={`/date-facts/${next.month}/${next.day}`} className="next-prev-column next">
                        <h2 className="section-heading">Next</h2>
                        <img className='arrow' src={arrowRight} alt="next" />
                        <h2 className="large-number">{next.day}. {next.month}.</h2>
                    </Link>
                }

            </div>
        </section>
    )
}