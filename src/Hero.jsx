import React from 'react'
import heroImg from "./assets/hero.png"
import Button from './Button'

const Hero = () => {
  return (
    <div id='home' className='min-h-[calc(100vh-5rem)] bg-slate-900 flex flex-col-reverse lg:flex-row justify-center items-center'>
        <div className="hero-text h-full lg:w-1/2 w-full flex flex-col justify-center items-center md:pl-20 px-5 lg:pl-48">
            <h1 className='text-md lg:text-2xl text-slate-400 w-full  mb-2'>Hi, I am Chirosree..</h1>
            <h2 className='text-xl lg:text-5xl text-slate-100 font-semibold w-full lg:mb-5 mb-1 font-mono '>Front-End Developer| Crafting clean & thoughtful web experiences</h2>
            <h3 className='text-md lg:text-2xl text-slate-400 lg:mb-5 mb-2 w-full'>I enjoy building responsive interfaces using React and Tailwind CSS.</h3>
            <div className="btn-holder flex justify-start items-start w-full lg:gap-7 gap-2 mt-2">
                <a href="#project"><Button
                name ="View Project"
                /></a>
                <a href="#contact"><Button
                name ="Contact Me"
                /></a>
            </div>
        </div>
        <div className=" hero-illustration h-full lg:w-1/2 w-4/5 flex justify-center items-center  mb-2  lg:pr-48">
            <img src={heroImg} alt="heroImage" className=' h-full w-full object-cover object-center '/>
        </div>

    </div>
  )
}

export default Hero