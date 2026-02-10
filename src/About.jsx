import React from 'react'
import aboutImg from "./assets/skill.png"
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa6"
import { SiTailwindcss } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { FaWordpress } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";

const About = () => {
  return (
    <section id='about' className='bg-slate-900 min-h-screen'>
        <h2 className='text-center text-2xl lg:text-5xl lg:py-5 py-3 text-slate-100 font-bold'>About Me</h2>
        <div className="abt-content flex lg:flex-row flex-col-reverse lg:mt-5 mt-3 ">
        <div className="abt-text text-slate-400 items-center justify-center lg:pl-52 lg:w-1/2 w-full px-5">
            <p className='lg:text-xl text-md lg:mb-4 mb-2 max-w-2xl'>I’m Chirosree Ghosh, a front-end developer who enjoys building clean, responsive, and user-friendly web interfaces. I work primarily with React and Tailwind CSS, and I focus on writing clear, maintainable code.</p>
            <ul className='list-disc list-inside text-slate-400 lg:text-2xl text-md font-medium lg:mb-10 mb-5' >
                <li >Strong foundation in HTML, CSS, JavaScript</li>
                <li>Experienced with React & Tailwind CSS</li>
                <li>Focused on responsive and accessible UI</li>
                <li>Actively building and refining projects</li>
            </ul>
            <h3 className='font-semibold lg:text-5xl text-2xl lg:mb-6 mb-3 '>Skills</h3>
            <h4 className='font-medium lg:text-3xl text-xl lg:mb-6 mb-3'>Using Now :</h4>
            <div className="icon-holder flex items-center lg:text-6xl text-2xl lg:gap-10 gap-5 lg:mb-6 mb-3">
                <SiHtml5 className='text-orange-400 opacity-80 hover:opacity-100'/>
                <SiCss3 className='text-sky-400 opacity-80 hover:opacity-100'/>
                <AiOutlineJavaScript className='text-yellow-400 opacity-80 hover:opacity-100'/>
                <FaReact className='text-sky-400 opacity-80 hover:opacity-100' />
                <SiTailwindcss className='text-sky-400 opacity-80 hover:opacity-100' />
                
            </div>
            <h4 className='font-medium lg:text-3xl text-xl lg:mb-6 mb-3'>Learning Now :</h4>
            <div className="icon-holder flex items-center lg:text-6xl text-2xl lg:gap-10 gap-5 lg:mb-6 mb-3">
                <LuFigma className='text-sky-400 opacity-80 hover:opacity-100' />
                <FaWordpress className='text-sky-400 opacity-80 hover:opacity-100' />
                <FaGitAlt className='text-orange-400 opacity-80 hover:opacity-100' />

            </div>
            
        </div>
        <div className="abt-pic lg:w-1/2 w-full pl-16 lg:pl-0">
            <img src={aboutImg} alt="about-img" className=' object-cover object-center w-3/4'  />

        </div>
        </div>
        
    </section>
  )
}

export default About