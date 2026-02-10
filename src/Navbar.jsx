import { useState } from "react";
import { BsGithub } from "react-icons/bs"
import { GrLinkedin } from "react-icons/gr"
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5"
const Navbar = () => {
    const [isopen, setisopen] = useState(false)
  return (
    <div>
        <nav className='flex justify-between items-center h-20 md:px-52 px-10 bg-slate-900 text-slate-100 cursor-pointer' id='nav'>
            <div className="logo">MyPortfolio</div>
            <div className="menu">
                <ul className='hidden lg:flex justify-center gap-7 text-xl'>
                    <li> <a href="#home">Home</a></li>
                    <li> <a href="#about">About</a></li>
                    <li> <a href="#project">Project</a></li>
                    <li> <a href="#contact">Contact</a></li>
                    
                </ul>
            </div>
            <div className="social hidden lg:flex gap-7 text-xl">
                <a href="https://github.com/Chirosree007" target='_blank'><BsGithub /></a>
                <a 
                href="https://www.linkedin.com/in/chirosree-ghosh-1393a1208/"
                target="_blank"
                rel="noopener noreferrer">
                <GrLinkedin /></a>
                
            </div>
            <div className="ham-menu flex lg:hidden text-xl" 
            onClick={()=> setisopen(!isopen)}>
                {isopen ? <IoCloseSharp/> : <RiMenu3Fill />  }
                
            </div>

            {isopen && (
                <div className="sidemenu lg:hidden w-full bg-slate-900/60 backdrop-blur-sm absolute right-0 top-14">
                    <ul className="lg:hidden text-slate-100 flex flex-col items-center gap-6 py-6">
                        <li> <a href="#home">Home</a></li>
                        <li> <a href="#about">About</a></li>
                        <li> <a href="#project">Project</a></li>
                        <li> <a href="#contact">Contact</a></li> 
                    </ul>
                    <div className="icon flex justify-center gap-6 text-lg py-6 ">
                         <a href="https://github.com/Chirosree007" target='_blank'><BsGithub /></a>
                            <a 
                            href="https://www.linkedin.com/in/chirosree-ghosh-1393a1208/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <GrLinkedin /></a>
                    </div>
                </div>
                
            )}
        </nav>
    </div>
  )
}

export default Navbar