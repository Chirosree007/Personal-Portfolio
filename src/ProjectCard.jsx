import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='card bg-slate-800 rounded-xl overflow-hidden min-h-64 w-72 lg:min-h-80 lg:w-96 mx-5 lg:mx-0 hover:scale-105 transition'>
      <img src={project.image} alt="project-image" className='w-full lg:h-48 h-40 object-cover object-center' />
      <div className="title p-3 lg:p-5">
        <h3 className='text-xl text-center font-semibold text-white'>{project.title}</h3>
        <p className='text-md text-slate-400 mt-2'>{project.description}</p>
        <div className="tech flex flex-wrap gap-4 lg:gap-2 mt-2 text-md text-slate-400 font-bold"><span>Tech Used :</span>{project.tech}</div>
        <div className="link-holder flex flex-wrap gap-5 mt-2 text-lg text-indigo-400 font-bold">
          <a href={project.live} target='_blank' className='hover:underline'>Preview</a>
          <a href={project.code} target='_blank' className='hover:underline'> See Code</a>
        </div>
      </div>

    </div>
  )
}

export default ProjectCard