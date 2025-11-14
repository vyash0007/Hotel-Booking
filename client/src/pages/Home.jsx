import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial '
import NewsLetter from '../components/NewsLetter'
import RecommendedHotels from '../components/RecommendedHotels'

const Home = () => {


    return (
        <>
            <Hero />
            <FeaturedDestination />
            <ExclusiveOffers />
            <RecommendedHotels />
            <Testimonial />
            <NewsLetter/>
        </>
    )
}

export default Home