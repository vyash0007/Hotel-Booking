import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const NewsLetter = () => {
    return (
        <div className='relative flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-6 py-14 md:py-18 mx-2 lg:mx-auto my-30 bg-gray-900 text-white overflow-hidden shadow-2xl'>
            <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>
            <div className='relative z-10'>
                <Title title="Stay Inspired" subTitle="Subscribe for exclusive travel deals, destination guides, and insider tips. Never miss out on your next adventure." />
            </div>
            <div className='relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full max-w-2xl'>
                <input type="email" className='bg-white/10 backdrop-blur-sm px-5 py-3.5 border-2 border-white/20 rounded outline-none focus:border-white/50 focus:bg-white/20 transition-all max-w-66 w-full text-white placeholder:text-white/60 shadow-lg' placeholder='Enter your email address' />
                <button className='flex items-center justify-center gap-2 group bg-white text-gray-900 px-6 md:px-8 py-3.5 rounded font-semibold hover:bg-blue-500 hover:text-white active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap'>
                    Subscribe Now
                    <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 group-hover:translate-x-1 transition-all' />
                </button>
            </div>
            <p className='relative z-10 text-gray-300 mt-8 text-xs text-center max-w-md'>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
            <div className='absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl'></div>
        </div>
    )
}

export default NewsLetter