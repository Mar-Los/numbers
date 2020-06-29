import React from 'react'
import arrowRight from '../../arrow-right.svg'
import arrowLeft from '../../arrow-left.svg'
import { Link } from 'react-router-dom'
import MONTHS from '../../jsFunctionsAndData/months'

export default function NextPrevMonthSection(props) {

    return (
        <section className="content-section no-p">
            <h2 className="section-heading-large">See Other Months!</h2>
            <div className="three-column-flex smaller-middle-div">
                {(props.month > 1) ? (
                    <Link to={`/date-facts/${props.month - 1}`} className="next-prev-column prev">
                        <h2 className="section-heading">Prev</h2>
                        <img className='arrow' src={arrowLeft} alt="prev" />¨
                <h2 className="section-heading-large">{MONTHS[props.month - 2].name}</h2>
                    </Link>
                ) : (
                        <div></div>
                    )}
                <div></div>
                {props.month <= 12 &&
                    <Link to={`/date-facts/${Number(props.month) + 1}`} className="next-prev-column next">
                        <h2 className="section-heading">Next</h2>
                        <img className='arrow' src={arrowRight} alt="next" />
                        <h2 className="section-heading-large">{MONTHS[Number(props.month)].name}</h2>
                    </Link>
                }
            </div>
        </section>
    )
}
