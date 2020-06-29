import React from 'react'
import FromToSection from '../FromToSection'
import FeaturedFactHero from '../FeaturedFactHero'


export default function YearFactsPage() {

    document.title = 'Year Facts'

    return (
        <>
            <FeaturedFactHero type='year' />
            <FromToSection type='year' />
        </>
    )
}
