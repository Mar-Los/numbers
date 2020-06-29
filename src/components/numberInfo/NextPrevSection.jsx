import React from 'react'
import arrowRight from '../../arrow-right.svg'
import arrowLeft from '../../arrow-left.svg'
import { Link } from 'react-router-dom'

export default function NextPrevSection(props) {
    return (
        <section className="content-section no-p">
            <h2 className="section-heading-large">See Other Numbers!</h2>
            <div className="three-column-flex">
                <Link to={`/number-info/${props.number - 1}`} className="next-prev-column prev">
                    <h2 className="section-heading">Prev</h2>
                    <img className='arrow' src={arrowLeft} alt="prev" />¨
                    <h2 className="large-number">{props.number - 1}</h2>
                </Link>
                <div></div>
                <Link to={`/number-info/${Number(props.number) + 1}`} className="next-prev-column next">
                    <h2 className="section-heading">Next</h2>
                    <img className='arrow' src={arrowRight} alt="next" />
                    <h2 className="large-number">{Number(props.number) + 1}</h2>
                </Link>
            </div>

        </section>
    )
}
