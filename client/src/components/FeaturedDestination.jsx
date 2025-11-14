import React from 'react'
import { useAppContext } from '../context/AppContext';
import Title from './Title';
import HotelCard from './HotelCard';


const FeaturedDestination = () => {
    const { rooms, navigate } = useAppContext();
    return rooms.length > 0 && (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-white py-20'>
            <Title title="Featured Destination" subTitle="Explore breathtaking locations and premium stays. From tropical paradises to urban sanctuaries, your perfect getaway awaits." />
            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                {rooms.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}
            </div>
            <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }} className='group my-16 px-6 py-3 text-sm font-medium border-2 border-gray-800 rounded bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl'>
                <span className='flex items-center gap-2'>
                    View All Destinations
                    <span className='group-hover:translate-x-1 transition-transform'>→</span>
                </span>
            </button>
        </div>
    )
}

export default FeaturedDestination