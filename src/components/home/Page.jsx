import React from 'react'
import HeroSection from './HeroSection'
import TodaysFacts from './TodaysFacts'
import FactTypesSection from '../FactTypesSection'


export default function HomePage() {

    document.title = 'Number Facts'

    return (
        <>
            <HeroSection />
            <TodaysFacts />
            <FactTypesSection number='random' includeDate={true} />
        </>
    )
}
