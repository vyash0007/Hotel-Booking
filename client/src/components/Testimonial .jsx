import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets';
import StarRating from './StarRating';

const Testimonial = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-slate-100 pt-20 pb-30'>
            <Title title="What Our Guests Say" subTitle="Real experiences from travelers who've discovered their perfect stays. Join thousands of satisfied guests who trust Haven for their journeys." />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 w-full'>
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className='group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl flex flex-col border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2'>
                        <div className='flex items-center gap-3'>
                            <div className='relative'>
                                <img className='w-14 h-14 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-blue-400 transition-all' src={testimonial.image} alt={testimonial.name} />
                                <div className='absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white'></div>
                            </div>
                            <div>
                                <p className='font-playfair text-lg font-semibold text-gray-800'>{testimonial.name}</p>
                                <p className='text-gray-500 text-sm flex items-center gap-1'>
                                    <span className='text-blue-500'>📍</span>
                                    {testimonial.address}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 mt-4 bg-amber-50 px-3 py-2 rounded-lg w-fit'>
                           <StarRating rating={testimonial.rating} />
                        </div>
                        <p className='text-gray-600 text-sm mt-5 leading-relaxed italic relative'>
                            <span className='text-4xl text-blue-200 absolute -top-2 -left-2'>"</span>
                            <span className='relative z-10'>{testimonial.review}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;