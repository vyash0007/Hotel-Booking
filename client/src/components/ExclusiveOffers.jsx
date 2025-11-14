import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import { exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 bg-white'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full '>
                <Title align='left' title="Exclusive Offers" subTitle="Unlock exceptional savings on luxury accommodations. Limited-time deals designed to make your dream vacation more affordable." />
                <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12 hover:gap-3 transition-all'>
                    View All Offers
                    <img className='group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="arrow-icon" />
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full'>
                {exclusiveOffers.map((item) => (
                    <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl min-h-[300px]' style={{ backgroundImage: `url(${item.image})` }}>
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
                        <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-md z-10 animate-pulse'>
                            {item.priceOff}% OFF
                        </p>
                        <div className='relative z-10'>
                            <p className='text-2xl font-medium font-playfair drop-shadow-lg'>{item.title}</p>
                            <p className='drop-shadow-md mt-2'>{item.description}</p>
                            <p className='text-xs text-white/80 mt-3 font-medium'>Expires {item.expiryDate}</p>
                        </div>
                        <button className='relative z-10 flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5 transition-all'>
                            View Offers
                            <img className='invert group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt="arrow-icon" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffers