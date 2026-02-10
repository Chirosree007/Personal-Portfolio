import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from "./projects";


const Project = () => {
  return (
   <section id='project' className='bg-slate-900 min-h-screen py-12 lg:py-20'>
        <h2 className='text-2xl lg:text-5xl text-center lg:py-5 py-3 text-slate-100 font-bold'>My Projects</h2>
        <p className='text-slate-400 text-md lg:text-3xl mt-2 lg:mt-5 text-center px-5 '> A selection of projects showcasing my frontend skills, design sense,
            and practical implementation.</p>
        <div className="project-container flex flex-col justify-center items-center lg:flex-row gap-10 mt-10 lg:mt-20 ">
            {projects.map((project,index)=>(
                <ProjectCard key={index} project={project}/>

            ))}
            

        </div>
   </section>
  )
}

export default Project