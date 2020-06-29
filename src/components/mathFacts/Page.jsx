import React from 'react'
import FeaturedFactHero from '../FeaturedFactHero'
import FromToSection from '../FromToSection'


export default function MathFactsPage() {

    document.title = 'Math Facts'

    return (
        <>
            <FeaturedFactHero type='math' />
            <FromToSection type='math' />
        </>
    )
}
