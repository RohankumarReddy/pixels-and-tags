import React, { useRef } from 'react';
import { EXPERIENCES } from '../constants/index';

const Experience = () => {
    const experienceRef = useRef(null);
    
    return (
        <section className='py-16' id='work' ref={experienceRef}>
            <div className='px-4'>
                <h2 className='mb-12 text-center text-3xl font-medium lg:text-4xl'>Experience</h2>
                <div className='mx-auto max-w-4xl'>
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className='flex flex-col items-start md:flex-row mb-12 p-4 border-b border-purple-300/10 last:border-b-0'>
                            <div className='w-full text-sm font-semibold text-stone-300 md:w-1/4 lg:text-lg mb-2 md:mb-0 md:text-left'>
                                {experience.yearRange}
                            </div>
                            <div className='w-full md:w-3/4 md:pl-8'>
                                <h3 className='mb-2 text-lg lg:text-2xl'>
                                    {experience.role} - {" "}
                                    <span className='bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent'>
                                        {experience.company}
                                    </span>
                                </h3>
                                <p className='mb-4 text-sm lg:text-base'> {experience.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {experience.techStack.map((tech, techIndex) => (
                                        <span key={techIndex} className='rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold text-pink-200 bg-pink-900/10'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;