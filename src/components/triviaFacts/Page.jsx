import React from 'react'
import FeaturedFactHero from '../FeaturedFactHero'
import FromToSection from '../FromToSection'

export default function TriviaFactsPage() {

    document.title = 'Trivia Facts'

    return (
        <>
            <FeaturedFactHero type='trivia' />
            <FromToSection type='trivia' />
        </>
    )
}
