import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FiMail } from "react-icons/fi";


import contactimage from "./assets/contact.png"

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen w-full bg-slate-900'>
        <h2 className='text-center text-2xl lg:text-5xl lg:py-5 py-3 text-slate-100 font-bold'>Contact Me</h2>
        <p className='text-center lg:text-3xl text-md text-slate-400 lg:mt-5 px-5'>Have a question, opportunity, or just want to give feedback?
        Feel free to reach out — I’d love to connect.
        </p>
        
        <div className="contact-content flex lg:flex-row flex-col-reverse gap-20 justify-center  lg:pl-52 lg:mt-5 mt-3 text-slate-400 lg:text-xl text-md max-w-7xl mx-auto">
            <div className="left flex lg:flex-col flex-col-reverse items-center justify-center lg:w-1/2 w-full">
            <div className="contact-image h-72 w-72 lg:h-96 lg:w-96 flex flex-col lg:mt-10 mt-1 mx-auto"> <img src={contactimage} alt="contact-image" className='h-full w-full
            object-cover object-center' /></div>
            <div className="contact-text lg:w-1/2 w-full ">
                <p className='mb-4 flex items-center lg:justify-start justify-center gap-2'><FiMail /><a href="https://mail.google.com/mail/?view=cm&to=chiroshree1999@gmail.com" target='_blank' className='text-indigo-400 hover:underline'>Mail me</a></p>
                <p className='mb-4 flex items-center lg:justify-start justify-center gap-2 '><BsLinkedin /> <a href="https://www.linkedin.com/in/chirosree-ghosh-1393a1208/" target='_blank' className='text-indigo-400 hover:underline'>Linkedin Profile </a></p>
                <p className=' mb-4 flex items-center lg:justify-start justify-center gap-2'><FaGithub /> <a href="https://github.com/Chirosree007" target='_blank' className='text-indigo-400 hover:underline'>Github Profile</a></p>
            </div>
            </div>
            <div className="contact-form lg:w-1/2 w-full flex items-center justify-center px-5 lg:px-0">
                <form action="" className='bg-slate-800 p-6 rounded-xl px-5 lg:mt-5 mt-3 '>
                    <input type="text" name="Name" className='w-full p-3 mb-3 rounded bg-slate-700 text-white outline-none' placeholder='Your Name' />
                    <input type="email" name="Email" className='w-full p-3 mb-3 rounded bg-slate-700 text-white outline-none' placeholder='Your Email' /><textarea name="Message" rows="2" className='w-full p-3 mb-3 rounded bg-slate-700 text-white outline-none' placeholder=' Message'></textarea>
                    <button className='w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded font-semibold flex items-center justify-center gap-3'>Submit<IoIosSend /></button>

                </form>
            </div>
        </div>

    </section>
  )
}

export default Contact