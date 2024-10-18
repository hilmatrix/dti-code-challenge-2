import ServiceItem from "../../components/serviceItem/index";
import WorkItem from "../../components/workItem/index";

export default function Services() {
    return (
        <main>
            <section id="services"> 
              <div className="bg-charcoal-gray text-white h-[400px] md:min-h-[300px] flex relative justify-center p-10 flex-col md:flex-row font-semibold">
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

             <section id="service-2d">
              <div className='bg-charcoal-gray p-10 text-white'>
               <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4"><h1>2D Art Service</h1></span>
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
               </div>
             </section>

             <section id="service-3d">
              <div className='bg-light-gray p-10 text-black'>
               <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4"><h1>3D Art Service</h1></span>
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
               </div>
             </section>

             <section id="service-2d">
              <div className='bg-charcoal-gray p-10 text-white'>
               <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4"><h1>2D Art Service</h1></span>
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
               </div>
             </section>
        </main>
    );
}