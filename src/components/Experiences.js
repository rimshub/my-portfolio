import React from 'react';
import data from './../data/experienceData.js';
import ExperienceCard from './ExperienceCard.js';

function Experience() {
  return (
    <div id="experience" className='sm:pl-[8rem] p-8 mx-7 mt-4 sm:mt-0 sm:pt-16 pb-20 sm:px-4 sm:py-0'>
      <div>
        <h1 className='w-72 mb-8 tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl'>
          Experience
        </h1>
      </div>

      {
        data.map((exp) => {
          return (
            <ExperienceCard
              key={exp.id}
              {...exp}
            />
          )
        })
      }
       
    </div>
  );
}

export default Experience;
 