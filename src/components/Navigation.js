import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Hamburger from 'hamburger-react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Navigation = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  return (
    <div>
      <div className="flex justify-between text-white p-10 z-10">
        <div>
            <a href="/"><img src={logo} alt="Logo" className="w-6 text-white opacity-60 transition ease-in-out hover:opacity-100 duration-300"/></a>
        </div>
        <div className="hidden md:flex gap-8 font-mono">
            <a href="/" className="underline hover:no-underline">home</a>
            <a href="https://drive.google.com/file/d/1N8oMbVqn9KL5OAtgsZBghRbE65sBZzL5/view?usp=sharing" className="underline hover:no-underline" target="_blank">resume</a>
        </div>
        <div className="hidden md:flex flex gap-4">
            <div className="text-white opacity-60 transition ease-in-out hover:opacity-100 duration-300"><a href="https://github.com/mayasarena"><AiFillGithub size={28}/></a></div>
            <div className="text-white opacity-60 transition ease-in-out hover:opacity-100 duration-300"><a href="https://www.linkedin.com/in/mayasmurad/"><AiFillLinkedin size={28}/></a></div>
        </div>
        <div className="md:hidden flex">
          <Hamburger toggled={isNavOpened} toggle={setIsNavOpened} />
        </div>
      </div>
      <div className={isNavOpened ? "nav-open flex z-10 absolute md:hidden h-screen w-screen bg-gradient-to-r from-purple to-blue justify-center items-center" : "nav-close flex z-10 absolute md:hidden h-screen w-screen bg-gradient-to-r from-purple to-blue justify-center items-center"}>
        <div className="text-white text-4xl flex flex-col items-center gap-4 -mt-24">
              <a href="/">home</a>
              <a href="/" className="">resume</a>
              <a href="https://github.com/mayasarena" className="">github</a>
              <a href="https://www.linkedin.com/in/mayasmurad/" className="">linkedin</a>
        </div>
      </div>
    </div>
  )
}

export default Navigation