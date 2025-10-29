import React, { useRef } from 'react';
import { PROJECTS } from '../constants/index';

const Projects = () => {
    const projectRef = useRef(null);

    return (
        <section className='pb-16' id='projects' ref={projectRef}>
            <div className='px-4'>
                <h2 className='mb-8 text-center text-3xl font-medium lg:text-4xl'>Projects</h2>
                <div className='flex flex-wrap justify-between'>
                    {PROJECTS.map((project) => (
                        <div key={project.id} className='flex w-full flex-col p-4 md:w-1/2 lg:w-1/3'>
                            <div className='flex-grow overflow-hidden rounded-2xl border border-purple-300/20 transition-all duration-300 hover:shadow-2xl hover:border-pink-500/50 hover:bg-zinc-800'>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
<div className="relative h-60 w-full overflow-hidden group">
  <img
    src={project.imgSrc}
    alt={project.title}
    className="h-full w-full object-cover transition duration-300 group-hover:brightness-75"
  />
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <span className="text-white text-xl font-bold hover:text-black transition-colors duration-200">Visit site / GitHub</span>
  </div>
</div>                                </a>
                                <div className='p-6'>
                                    <h3 className='mb-2 text-lg font-medium lg:text-2xl'>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='transition-colors duration-200 hover:text-pink-400'
                                        >
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className='mb-4 text-zinc-400'> {project.description}</p>
                                    <div>
                                    <button className="text-md mr-4 transition-colors duration-200 hover:text-blue-500 hover:scale-125"> Visit</button>
                                    <button className="text-md mr-2  transition-colors duration-200 hover:text-blue-500 hover:scale-125"> GitHub</button>
                                    </div>
                                    
                                    <div className='mb-4'>
                                        <strong className='underline text-pink-500'>Tech Stack</strong>
                                        <ul className='flex flex-wrap mt-2'>
                                            {project.techStack.map((tech, index) => (
                                                <li key={index} className='mt-3 mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold text-pink-200 bg-pink-900/10'>
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;