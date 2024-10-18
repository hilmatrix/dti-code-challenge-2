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
        </main>
    );
}