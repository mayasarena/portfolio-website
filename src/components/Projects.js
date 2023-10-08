import React, { useState, useRef } from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Projects = () => {
  const ref = useRef(null);
  const scroll = () => ref.current.scrollIntoView({behavior: 'smooth'});
  const [currentId, setCurrentId] = useState("intro");

  const handleClick = (id) => {
    setCurrentId(id);
    console.log('currentid', currentId);
  }

  return (
    <div>
      <div className="h-screen flex md:items-center justify-center md:-mt-24 pt-20 md:pt-0">
        <div className="flex md:flex-row flex-col gap-8 h-1/3 text-white w-5/6 md:w-2/3 lg:w-1/2">
          <div className="flex flex-col gap-5 w-auto md:hidden">
              <span className="font-bold text-xl">Projects</span>
              <div className="flex flex-col gap-3">
                <a onClick={() => handleClick("study-tracker")} className="font-mono text-sm hover:font-bold hover:cursor-pointer">StudyTracker</a>
                <a onClick={() => handleClick("acnh-app")} className="font-mono text-sm hover:font-bold hover:cursor-pointer">Nook's Spot</a>
                <a onClick={() => handleClick("galaxia")} className="font-mono text-sm hover:font-bold hover:cursor-pointer">Galaxia</a>
                <a onClick={() => handleClick("unicorn")} className="font-mono text-sm hover:font-bold hover:cursor-pointer">Bob the Unicorn</a>
              </div>
            </div>
          <div className="basis-full flex flex-col">
            <div className="w-full">
              <div className={currentId == "intro" ? "active-slide flex flex-col gap-6" : "slide"}>
              <div className="flex flex-col gap-3">
                <span className="font-bold text-4xl">Maya Murad</span>
                <span className="font-bold text-xl text-pink">software developer and designer</span>
                </div>
                  I’m a recent Master of Computer Science (specialized in Human-Computer Interaction) graduate who is passionate about designing and implementing beautiful user interfaces. Currently, I'm seeking a full-time role that will allow me to grow as a designer and developer. 
                  <div className="flex flex-row gap-3 text-pink text-sm font-mono">
                    <div className="flex gap-2 items-center"><MdEmail /><b>mayasarena7@gmail.com</b></div>
                    <a href="https://github.com/mayasarena" className="underline hover:no-underline" target="_black">github</a>
                    <a href="https://www.linkedin.com/in/mayasmurad/" className="underline hover:no-underline" target="_black">linkedin</a>
                  </div>
                </div>
              <div className={currentId == "study-tracker" ? "active-slide flex flex-col gap-6" : "slide"}>
                <span className="font-bold text-4xl text-pink">StudyTracker</span>
                <div className="flex flex-col gap-7">
                  <div>
                    I implemented StudyTracker for my Master's thesis, during which I explored the impacts of tracking study time on procrastination and study habits in university students. I conducted usability studies, interviews, and performed thematic and statistical analyses throughout the 16-month thesis. StudyTracker was implemented for iOS 15.0+ using Swift.
                    <br /><span className="font-mono text-xs text-pink"><b>Keywords:</b> UX Research, UX Design, Qual + Quant Analysis, Swift, Mobile App Development, Research Project</span>
                  </div>
                  <div className="flex gap-6">
                    <a href="https://drive.google.com/file/d/1mR4m11A7aVpG9M03lr854NOgpdWTJF13/view?usp=sharing" className="button font-mono text-sm" target="_blank">Thesis Report</a>
                    <a href="https://github.com/mayasarena/Study-Tracker" className="button font-mono text-sm" target="_blank">Github Repo</a>
                  </div>
                </div>
              </div>
              <div className={currentId == "acnh-app" ? "active-slide flex flex-col gap-6" : "slide"}>
              <span className="font-bold text-4xl text-pink">Nook's Spot</span>
                <div className="flex flex-col gap-7">
                  <div>
                    Nook's Spot is a simple Animal Crossing: New Horizons critter and villager wiki, which I implemented using ReactJS and Sanity (backend). Users can login with their Google accounts, which allows them to star/unstar items. I used the <a href="https://api.nookipedia.com/" className="underline text-pink">Nookipedia API</a> to retrieve data for the app. <b>Note:</b> the deployment of the app is only semi-functional. Checkout the github repository for a description and gifs of features.
                    <br /><span className="font-mono text-xs text-pink"><b>Keywords:</b> ReactJS, Sanity, TailWindCSS, Website Development</span>
                  </div>
                  <div className="flex gap-6">
                    <a href="https://mayasarena.github.io/acnh-app/" className="button font-mono text-sm" target="_blank">Website</a>
                    <a href="https://github.com/mayasarena/acnh-app" className="button font-mono text-sm" target="_blank">Github Repo</a>
                  </div>
                </div>
              </div>
              <div className={currentId == "galaxia" ? "active-slide flex flex-col gap-6" : "slide"}>
              <span className="font-bold text-4xl text-pink">Galaxia</span>
                <div className="flex flex-col gap-7">
                  <div>
                    Galaxia is a 2D sandbox space game that I developed in Unity with one other team member. I was in charge of the design and user experience of the game. I also implemented the quests, drag and drop inventory, health, shopping, currency and building mechanisms. Check out the github repository for gifs of the gameplay!
                    <br /><span className="font-mono text-xs text-pink"><b>Keywords:</b> Unity, C#, Game Development</span>
                  </div>
                  <div className="flex gap-6">
                    <a href="https://github.com/mayasarena/Galaxia" className="button font-mono text-sm" target="_blank">Github Repo</a>
                  </div>
                </div>
              </div>
              <div className={currentId == "unicorn" ? "active-slide flex flex-col gap-6" : "slide"}>
                <span className="font-bold text-4xl text-pink">Bob the Unicorn</span>
                <div className="flex flex-col gap-7">
                  <div>
                    This is a fun 2D adventure platformer that I created using Unity and C#. I designed and hand-drew all of the assets and I implemented all of the features, including camera and player control systems, menus, enemies, and powerups. Checkout the github repo for gifs of gameplay!
                    <br /><span className="font-mono text-xs text-pink"><b>Keywords:</b> Unity, C#, Game Development</span>
                  </div>
                  <div className="flex gap-6">
                    <a href="https://github.com/mayasarena/bob-the-unicorn" className="button font-mono text-sm" target="_blank">Github Repo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col gap-5 w-auto hidden md:block">
            <span className="font-bold text-xl">Projects</span>
            <div className="flex flex-col gap-3 mt-6">
              <a onClick={() => handleClick("study-tracker")} className={currentId === "study-tracker" ? "font-mono font-bold text-pink text-sm hover:font-bold hover:cursor-pointer" : "font-mono text-sm hover:font-bold hover:cursor-pointer"}>StudyTracker</a>
              <a onClick={() => handleClick("acnh-app")} className={currentId === "acnh-app" ? "font-mono font-bold text-pink text-sm hover:font-bold hover:cursor-pointer" : "font-mono text-sm hover:font-bold hover:cursor-pointer"}>Nook's Spot</a>
              <a onClick={() => handleClick("galaxia")} className={currentId === "galaxia" ? "font-mono font-bold text-pink text-sm hover:font-bold hover:cursor-pointer" : "font-mono text-sm hover:font-bold hover:cursor-pointer"}>Galaxia</a>
              <a onClick={() => handleClick("unicorn")} className={currentId === "unicorn" ? "font-mono font-bold text-pink text-sm hover:font-bold hover:cursor-pointer" : "font-mono text-sm hover:font-bold hover:cursor-pointer"}>Bob the Unicorn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects