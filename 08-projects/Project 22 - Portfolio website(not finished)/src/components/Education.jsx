import React, { useRef } from 'react';
import { EDUCATION } from '../constants';

const Education = () => {
    const educationRef = useRef(null);
    
    return (
        <section className='py-16' id='education' ref={educationRef}>
            <div className='mx-auto max-w-4xl px-4'>
                <h2 className='mb-12 text-center text-3xl font-medium lg:text-4xl'>Education</h2>
                <div className='flex flex-col space-y-8'>
                    {EDUCATION.map((edu, index) => (
                        <div 
                            key={index} 
                            className='rounded-xl border border-purple-300/30 bg-white/10 p-6 sm:p-8 transition duration-300 hover:border-pink-500/50'
                        >
                            <p className='text-sm lg:text-base mb-1 font-semibold text-stone-300'>{edu.year}</p>
                            <h3 className='mb-1 text-xl lg:text-2xl font-bold text-white'>{edu.degree}</h3>
                            <h4 className='text-md font-medium lg:text-xl text-pink-300'>{edu.institution}</h4>
                            <h4 className='text-md mt-1 '>{edu.duration}</h4>
                            <p className='mt-1 text-sm lg:text-base text-zinc-300'>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;