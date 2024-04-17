import React from 'react';
import Project from './Project';
import data from './../data/projectsData.js';

function Projects() {
  return (
    <div id='projects' className='sm:pl-[10rem] sm:p-8 p-16 mt-4 sm:mt-0 sm:px-4 sm:py-2'>
        <div>
            <h1 className='w-72 mb-4 tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl sm:mb-4 sm:w-full'>Few Projects</h1>
        </div>

        {data.ProjectsData.map((project) => {
            return(<Project key={project.id}
                image={project.img}
                name={project.name}
                live={project.live}
                source={project.source}
                desc={project.description}/>)
        })}
       
    </div>
  );
}

export default Projects;
