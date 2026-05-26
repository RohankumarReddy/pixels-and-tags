import React, { useRef } from 'react';
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';

const Contact = () => {
    const contactRef = useRef(null);
    
    return (
        <section className='py-16' id='contact' ref={contactRef}>
            <div className=' px-4 text-center'>
                <h2 className='mb-8 text-3xl font-medium lg:text-4xl'>Let's Connect</h2>
                <p className='mb-4 text-lg lg:text-xl'>
                    Feel free to reach out via my email! &nbsp;
                    <a href="mailto:rohankumarrock200@gmail.com" className='border-b'>
                        rohankumarrock200@gmail.com
                    </a>
                </p>
                <div className='mt-8 flex justify-center space-x-6'>
                    <a 
                        href="https://www.linkedin.com/in/nagaruru-rohankumar-reddy-4420b0285/" 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='contact-icon' 
                        aria-label='Check my LinkedIn profile' 
                    >
                        <RiLinkedinBoxFill className='text-3xl' />
                    </a>
                    
                    <a 
                        href="https://github.com/RohankumarReddy" 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='contact-icon' 
                        aria-label='Check my GitHub profile' 
                    >
                        <RiGithubFill className='text-3xl' />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;