import LineSeparator from "@/components/lineSeparator";
import Section from "@/components/section";
import Testimony from "@/components/testimony";
import ServiceItem from "../../components/serviceItem/index";
import WorkItem from "../../components/workItem/index";

export default function Services() {

    return (
        <main>
            <Section id="services" title="Our Services" mode="dark"> 
              <div className="h-[400px] md:min-h-[300px] flex relative justify-center flex-col md:flex-row">
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
            </Section>

            <Section id="works" title="Our Works" mode="light">
                <WorkItem imageLink="/work-asteroid-shooter.jpg"
                  hyperLink="https://play.unity.com/en/games/c2d59a14-dbc4-40bc-9f8a-f37d92f5e3cf/asteroid-shooter"
                  workName="Asteroid Shooter"></WorkItem>
                <WorkItem imageLink="/work-rescue-game.jpg"
                  hyperLink="https://hilmatrix-game-rescue.vercel.app/"
                  workName="Rescue Game"></WorkItem>
             </Section>

             <Section id="service-2d" title="2D Art Service" mode="dark">
                 <p className="text-justify">
                 Our 2D art team specializes in creating captivating visuals and animations that bring your ideas to life. 
                 From character design and concept art to complete environmental layouts, we focus on delivering unique
                  and artistic solutions that stand out.
                 </p>
                 <br></br>
                 <span className="font-semibold">Services Include : </span>
                 <ul className="list-disc ml-8">
                    <li>Concept art for characters, environments, and assets</li>
                    <li>2D character design and illustrations</li>
                    <li>2D animation (frame-by-frame or skeletal)</li>
                    <li>User interface (UI) and user experience (UX) design</li>
                 </ul>
                 <br></br>
                 <span className="font-semibold">Pricing : </span>
                 <ul className="list-disc ml-8">
                    <li>Concept Art & Character Design: Starting at $200 per design</li>
                    <li>2D Animation: Starting at $50 per second of animation</li>
                    <li>UI/UX Design: Starting at $300 per project (Prices vary depending on the complexity and duration of the project)</li>
                 </ul>
             </Section>

             <Section id="service-3d" title="3D Art Service" mode="light">
                 <p className="text-justify">
                 Our 3D team offers top-tier modeling and animation services that add depth and realism to any project. 
                 Whether you need detailed 3D models for games, animations, or simulations, we provide visually compelling 
                 and technically sound solutions.
                 </p>
                 <br></br>
                 <span className="font-semibold">Services Include : </span>
                 <ul className="list-disc ml-8">
                    <li>3D character and environment modeling</li>
                    <li>Texturing and UV mapping</li>
                    <li>Rigging for animation-ready models</li>
                    <li>3D animation and cinematic sequences</li>
                 </ul>
                 <br></br>
                 <span className="font-semibold">Pricing : </span>
                 <ul className="list-disc ml-8">
                    <li>3D Modeling: Starting at $300 per character or environment</li>
                    <li>3D Texturing & Rigging: Starting at $150 per model</li>
                    <li>3D Animation: Starting at $75 per second of animation (Prices vary depending on the complexity and scope of the project)</li>
                 </ul>
             </Section>

             <Section id="service-game" title="Game Programming Service" mode="dark">
                 <p className="text-justify">
                 Our game development team specializes in building interactive, engaging games with smooth performance
                  and responsive gameplay. We handle everything from prototyping to full game deployment, ensuring your
                   game runs seamlessly on the platform of your choice.
                 </p>
                 <br></br>
                 <span className="font-semibold">Services Include : </span>
                 <ul className="list-disc ml-8">
                    <li>Game mechanics design and implementation</li>
                    <li>Integration of 2D/3D assets into game engines</li>
                    <li>Optimization for performance across multiple platforms</li>
                    <li>Backend programming for multiplayer or online features</li>
                 </ul>
                 <br></br>
                 <span className="font-semibold">Pricing : </span>
                 <ul className="list-disc ml-8">
                    <li>Prototype Development: Starting at $1,500 per prototype</li>
                    <li>Full Game Development: Starting at $10,000 per project (depending on size and complexity)</li>
                    <li>Performance Optimization: Starting at $500 per project (Pricing can vary based on game complexity, platform requirements, and additional features)</li>
                 </ul>
             </Section>

             <Section id="testimonials" title="Testimonials" mode="light">
                   <Testimony jobTitle="Indie Game Developer"
                     testimony="Working with Numinus Artspace was an absolute pleasure! Their 2D artist and animator brought my 
                     vision to life in ways I never imagined. The character designs were stunning, and the animations were fluid 
                     and captivating. They perfectly captured the style I was going for, and their attention to detail was impressive. 
                     I can't wait to collaborate with them again on future projects!"></Testimony>

                    <LineSeparator lineColor="dark"/>
       
                    <Testimony jobTitle="Visual Effects Director"
                     testimony="Numinus Artspace delivered exceptional 3D models and animations for my project. 
                     The 3D artist's ability to create highly detailed characters and environments blew me away, 
                     and the 3D animator made everything move so realistically! The level of professionalism and 
                     quality I received far exceeded my expectations, and they were very responsive to feedback. 
                     I highly recommend their services for anyone looking for top-tier 3D work."></Testimony>
       
                    <LineSeparator lineColor="dark"/>
       
                    <Testimony jobTitle="Studio Founder"
                     testimony="The Numinus Artspace game programming team took my concept and turned it into a 
                     fully functioning game in no time. Their technical expertise was evident from day one, and 
                     they were able to implement every feature I needed, from smooth gameplay mechanics to seamless 
                     asset integration. The communication throughout the project was excellent, and they met every 
                     deadline without issue. I would absolutely hire them again for my next game project!"></Testimony>
             </Section>
        </main>
    );
}