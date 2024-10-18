export default function AboutUs() {
    return (
        <main>
            <section id="company-history">
              <div className='bg-charcoal-gray p-10 text-white'>
               <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4"><h1>Company History</h1></span>
                 <p className="text-justify">
                 Founded in 2024, Numinus Artspace began as a passion project between four creative individuals united by their 
                 love for gaming and digital art. From its humble beginnings in Indonesia, the team has worked together to create 
                 immersive games that blend artistic expression with cutting-edge technology. Numinus Artspace was born out of a 
                 shared vision to create unique, memorable game experiences that push the boundaries of creativity and storytelling 
                 in the gaming industry.
                 </p>
               </div>
             </section>

             <section id="milestones">
              <div className='bg-light-gray p-10 text-black'>
               <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4"><h1>Milestones</h1></span>
                 <p className="text-justify">
                 Since its inception, Numinus Artspace has grown from concept to reality. Within its first year, 
                 the team has successfully completed multiple game prototypes and collaborated on various creative projects,
                  showcasing their skills in both 2D and 3D art, animation, and game development. The studio’s debut project, 
                  currently in development, aims to captivate players with innovative gameplay and a rich visual experience.
                 </p>
               </div>
             </section>

             <section id="teams">
              <div className='bg-charcoal-gray p-10 text-white'>
               <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4"><h1>Teams</h1></span>
                 <b>Hilman Mauludin</b>,<i>Game Programmer</i>, Oversees all technical aspects of game development, 
                 ensuring smooth performance, coding game mechanics, and integrating visual assets into the game engine.
                 <br/><br/>
                 <b>Yudhistira Irja Wiguna</b>,<i>2D Artist & Animator</i>, Responsible for designing and animating characters, 
                 environments, and visual effects, providing a unique artistic style for our 2D projects.
                 <br/><br/>
                 <b>Bill Galvin</b>,<i>3D Artist</i>, Creates high-quality 3D models and environments that 
                 add depth and realism to our game worlds.
                 <br/><br/>
                 <b>Reihan</b>,<i>3D Animator</i>, Brings movement and life to the 3D models, ensuring they interact 
                 fluidly within the game environments, enhancing immersion and player experience.
                 <br/><br/>
               </div>
             </section>
        </main>
    );
}