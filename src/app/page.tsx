import RightMenu from "../components/rightMenu/index";
import ServiceItem from "../components/serviceItem/index";

import Hero from "@/components/hero";
import Section from "@/components/section";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from "next/image";
import "./globals.css";

config.autoAddCss = false;

interface WorkGameProps {
  imageLink : string;
  hyperLink : string;
  workName : string;
}

const WorkGame = ({ imageLink, hyperLink, workName } : WorkGameProps) => (
  <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
    <Image src={imageLink} width={400} height={400} alt={workName} className="rounded-lg" />
    <a href={hyperLink} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-600 font-semibold hover:underline">{workName}</a>
  </div>
);

function WorksSection() {
  return (
    <Section id="works" title="Our Works" mode="light">
      <div className="max-w-5xl mx-auto">
        {/* 2D Works */}
        <h1 className="font-semibold text-2xl text-center mb-4">2D Works</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          <Image src="/work-image-1.jpg" width={400} height={400} alt="work-1" className="rounded-lg shadow-md" />
          <Image src="/work-image-2.jpg" width={400} height={400} alt="work-2" className="rounded-lg shadow-md" />
          <Image src="/work-image-3.jpg" width={400} height={400} alt="work-3" className="rounded-lg shadow-md" />
        </div>

        {/* 3D Works */}
        <h1 className="font-semibold text-2xl text-center mt-10 mb-4">3D Works</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          <Image src="/work-3d-1.jpg" width={400} height={400} alt="work-3d-1" className="rounded-lg shadow-md" />
          <Image src="/work-3d-2.jpg" width={400} height={400} alt="work-3d-2" className="rounded-lg shadow-md" />
          <Image src="/work-3d-3.jpg" width={400} height={400} alt="work-3d-3" className="rounded-lg shadow-md" />
        </div>

        {/* Games */}
        <h1 className="font-semibold text-2xl text-center mt-10 mb-4">Games</h1>
        <div className="flex justify-center">
          <WorkGame 
            imageLink="/work-asteroid-shoother-1-v2.jpg"
            hyperLink="https://play.unity.com/en/games/c2d59a14-dbc4-40bc-9f8a-f37d92f5e3cf/asteroid-shooter"
            workName="Asteroid Shooter"
          />
        </div>
      </div>
    </Section>
  );
}


export default function Home() {
  const links = [
    {href : "#", label : "Back to Top"},
    {href : "#services", label : "Services"},
    {href : "#company-overview", label : "Overview"},
    {href : "#works", label : "Works"},
    {href : "#testimonials", label : "Testimonials"},
  ];

  return (
    <main className={`relative`}>
      <Hero companyTitle="Numinus Artspace" companyTagline="Crafting Imagination into Reality"  
        videoUrl="/Hero.mp4"  videoWidth={"800"} textStyle="text-white"></Hero>

      <Section id="servies" title="Our Services" mode="light">
        <div className="h-[400px] md:min-h-[300px] flex relative justify-center flex-col md:flex-row">
          <div className="min-h-[33%] min-w-[100%] md:min-h-[100%] md:min-w-[33%]">
            <ServiceItem href="/services#service-2d" serviceName="2D Arts" imageUrl="/Logo-2D.png"/>
          </div>
          <div className="min-h-[33%] min-w-[100%] md:min-h-[100%] md:min-w-[33%]">
            <ServiceItem href="/services#service-3d" serviceName="3D Arts" imageUrl="/Logo-3D.png"/>
          </div>
          <div className="min-h-[33%] min-w-[100%] md:min-h-[100%] md:min-w-[33%]">
            <ServiceItem href="/services#service-game" serviceName="Game Creation" imageUrl="/Logo-Game.png"/>
          </div>
        </div>
      </Section>

      <Section id="company-overview" title="Company Overview" mode="dark">
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
      </Section>

      <WorksSection/>

      {/*
      <Section id="testimonials" title="Testimonials" mode="dark">
         <Testimony jobTitle="Lead Developer at Skybound Games"
           testimony="Working with Numinus Artspace has been a game-changer for our indie studio.
           Their 3D and 2D art designs brought our game world to life in ways we couldn't imagine.
           From concept art to detailed environment assets, everything was delivered on time and exceeded our expectations.
           They truly understand the creative process of game development. We couldn't have asked for better collaborators!"></Testimony>

          <LineSeparator lineColor="light"/>

          <Testimony jobTitle="Creative Director at Brightlight Media"
           testimony="We partnered with Numinus Artspace for a branding campaign, and their ability to create stunning visual
           concepts blew us away. Their team has a great eye for design and can translate vague ideas into beautiful, cohesive assets.
           The results were polished, professional, and perfectly aligned with our brand vision. We highly recommend them to anyone
           looking for top-notch creative services!"></Testimony>

          <LineSeparator lineColor="light"/>

          <Testimony jobTitle="Lead Developer at Founder of PixelDream Studios"
           testimony="Numinus Artspace was instrumental in designing the characters and animations for our mobile game. Their creative input,
           attention to detail, and ability to work within our budget were impressive. They took the time to understand our project and delivered
           a visual style that perfectly captured the fun and quirky nature of our game.
           We can't wait to work with them on future projects!"></Testimony>
      </Section>
          */}
      <RightMenu links={links}></RightMenu>
      
    </main>
  );
}
