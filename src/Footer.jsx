import { FaAngleDoubleUp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='min-h-48 bg-slate-950 text-slate-400 flex flex-col items-center justify-center'>
        <h3 className='py-3 lg:text-xl font-bold'><a href="#nav" className='flex items-center justify-center gap-2 text-indigo-400 hover:underline'>Back To Top <FaAngleDoubleUp /> </a></h3>
        <p className='flex items-center justify-center gap-7 lg:text-xl my-3'>
            <a href="https://www.linkedin.com/in/chirosree-ghosh-1393a1208/" className=" hover:text-indigo-400" ><BsLinkedin/></a>
            <a href="https://github.com/Chirosree007" target="_blank" className=" hover:text-indigo-400"><FaGithub/></a> 
            <a href="https://mail.google.com/mail/?view=cm&to=chiroshree1999@gmail.com" target="_blank" className=" hover:text-indigo-400"><FiMail/></a>  
        </p>
        <p className='lg:text-xl text-center my-3'>@2026 <span className='font-bold'>Chirosree Ghosh</span> All Rights Reserved.</p>
    </footer>
  )
}

export default Footer