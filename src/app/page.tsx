"use client"
import Link from "next/link";
import ServiceItem from "../components/serviceItem/index";
import Testimony from "../components/testimony/index";
import WorkItem from "../components/workItem/index";
import { montserrat } from "../fonts/index";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
config.autoAddCss = false;

import { useState } from "react";

export default function Home() {
  const [showRightMenu, setShowRightMenu] = useState(false);

  const LineSeparator = () => (
    <div className="flex justify-center">
        <div className="w-full bg-light-gray-alpha h-[2px] my-5"></div> 
    </div>
  )

  return (
    <main className={`relative ${montserrat.className}`}>
      <section id="hero">
          <div className="flex justify-center bg-charcoal-gray relative md:pb-[40px]">
              <video  muted autoPlay loop className="max-w-[800px] w-full">
                  <source src="/Hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              <div className="w-[100%] h-[100%] z-2 bg-charcoal-gray-alpha absolute"></div>
              <span className="absolute z-3 top-4  text-3xl md:text-4xl text-white font-semibold"><h1>Numinus Artspace</h1></span>
              <span className="absolute z-3 top-16 text-xl md:text-2xl text-white "><h1>Crafting Imagination into Reality</h1></span>
          </div>
      </section>

      <section id="services"> 
        <div className="bg-light-gray h-[400px] md:min-h-[300px] flex relative justify-center p-10 flex-col md:flex-row font-semibold">
          <span className="md:absolute md:top-4 text-xl md:text-2xl flex justify-center mb-4"><h1>Our Services</h1></span>
          <div className="min-h-[33%] min-w-[100%] md:min-h-[100%] md:min-w-[33%]">
            <ServiceItem serviceName="2D Arts" imageUrl="/Logo-2D.png"/>
          </div>
          <div className="min-h-[33%] min-w-[100%] md:min-h-[100%] md:min-w-[33%]">
            <ServiceItem serviceName="3D Arts" imageUrl="/Logo-3D.png"/>
          </div>
          <div className="min-h-[33%] min-w-[100%] md:min-h-[100%] md:min-w-[33%]">
            <ServiceItem serviceName="Game Creation" imageUrl="/Logo-Game.png"/>
          </div>
        </div>
      </section>

      <section id="company-overview">
        <div className='bg-charcoal-gray p-10 text-white'>
        <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4"><h1>Company Overview</h1></span>
          <p>
            Numinus Artspace is a dynamic startup based in indonesia, specializing in the creative industry.
            We are passionate about transforming imagination into reality through a wide range of services,
            including 2D and 3D art production, as well as game creation.</p>
          <br></br>
          <p>
            Our talented team of artists and developers is dedicated into delivering top-quality creative solutions
            that bring your vision to life. Wether it&apos;s designing captivating visual art or building immersive gaming
            experiences, Numinus Artspace is your partner in crafting innovation and creativity.
          </p>
        </div>
      </section>

      <section id="works">
        <div className="bg-light-gray flex justify-center p-10 flex-col">
            <span className="text-xl md:text-2xl flex justify-center mb-4 font-semibold"><h1>Our Works</h1></span>
            <WorkItem imageLink="/work-asteroid-shooter.jpg"
              hyperLink="https://play.unity.com/en/games/c2d59a14-dbc4-40bc-9f8a-f37d92f5e3cf/asteroid-shooter"
              workName="Asteroid Shooter"></WorkItem>
            <WorkItem imageLink="/work-rescue-game.jpg"
              hyperLink="https://hilmatrix-game-rescue.vercel.app/"
              workName="Rescue Game"></WorkItem>
        </div>
      </section>

      
        
      <section id="testimonials">
          <div className='bg-charcoal-gray p-10 text-white'>
            <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4"><h1>Testimonials</h1></span>
            <Testimony jobTitle="Lead Developer at Skybound Games"
              testimony="Working with Numinus Artspace has been a game-changer for our indie studio.
              Their 3D and 2D art designs brought our game world to life in ways we couldn't imagine.
              From concept art to detailed environment assets, everything was delivered on time and exceeded our expectations.
              They truly understand the creative process of game development. We couldn't have asked for better collaborators!"></Testimony>

             <LineSeparator/>

             <Testimony jobTitle="Creative Director at Brightlight Media"
              testimony="We partnered with Numinus Artspace for a branding campaign, and their ability to create stunning visual
              concepts blew us away. Their team has a great eye for design and can translate vague ideas into beautiful, cohesive assets.
              The results were polished, professional, and perfectly aligned with our brand vision. We highly recommend them to anyone
              looking for top-notch creative services!"></Testimony>

             <LineSeparator/>

             <Testimony jobTitle="Lead Developer at Founder of PixelDream Studios"
              testimony="Numinus Artspace was instrumental in designing the characters and animations for our mobile game. Their creative input,
              attention to detail, and ability to work within our budget were impressive. They took the time to understand our project and delivered
              a visual style that perfectly captured the fun and quirky nature of our game.
              We can't wait to work with them on future projects!"></Testimony>
          </div>
      </section>

      <div className="fixed right-0 top-0 z-5 w-full h-full pointer-events-none">

        <div className={`absolute w-[300px] h-full  ${showRightMenu ? "right-0" : "right-[-300px]"} 
          flex items-center transition-all duration-500 ease-in-out`}>
          <div className={`w-full h-[400px] bg-[#000000] flex justify-center items-center`}>
            <div className="w-[70%] h-[70%] text-white pointer-events-auto flex flex-col justify-around">
              <Link onClick={() => {setShowRightMenu(false)}} href="#">Back to Top</Link>
              <Link onClick={() => {setShowRightMenu(false)}} href="#services">Services</Link>
              <Link onClick={() => {setShowRightMenu(false)}} href="#company-overview">Overview</Link>
              <Link onClick={() => {setShowRightMenu(false)}} href="#works">Works</Link>
              <Link onClick={() => {setShowRightMenu(false)}} href="#testimonials">Testimonials</Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <button onClick={() => {setShowRightMenu(!showRightMenu)}} className="m-10 flex justify-center items-center w-20 h-20 bg-[#000000] rounded-full pointer-events-auto">
            <FontAwesomeIcon icon={faBars} color="white" size="2x" />
          </button>
        </div>
      </div>
    </main>
  );
}
