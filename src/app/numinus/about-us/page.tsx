import RightMenu from "@/components/rightMenu";
import Section from "@/components/section";

export default function AboutUs() {
     const links = [
       {href : "#", label : "Back to Top"},
       {href : "#company-history", label : "Company History"},
       {href : "#milestones", label : "Milestones"},
       {href : "#culture", label : "Our Culture"},
       {href : "#teams", label : "Team Members"},
       {href : "/numinus", label : "Back to Home"},
     ];

    return (
        <main>
            <Section id="company-history" title="Company History" mode="dark">
               <p className="text-justify">
               Founded in 2024, Numinus Artspace began as a passion project between four creative individuals united by their 
               love for gaming and digital art. From its humble beginnings in Indonesia, the team has worked together to create 
               immersive games that blend artistic expression with cutting-edge technology. Numinus Artspace was born out of a 
               shared vision to create unique, memorable game experiences that push the boundaries of creativity and storytelling 
               in the gaming industry.
               </p>
             </Section>

             <Section id="milestones" title="Milestones" mode="light">
                <p className="text-justify">
                Since its inception, Numinus Artspace has grown from concept to reality. Within its first year, 
                the team has successfully completed multiple game prototypes and collaborated on various creative projects,
                 showcasing their skills in both 2D and 3D art, animation, and game development. The studio’s debut project, 
                 currently in development, aims to captivate players with innovative gameplay and a rich visual experience.
                </p>
             </Section>

             <Section id="culture" title="Our Culture" mode="dark">
                <p className="text-justify">
                At Numinus Artspace, creativity drives everything we do. Our work culture is collaborative, open, and flexible, 
                allowing each team member to express their ideas and contribute to the projects. We believe in fostering an environment
                 where experimentation and innovation thrive. As a small team, we are adaptable and fast-moving, always pushing the
                  limits of our abilities to create games that challenge, entertain, and inspire players around the world.
                </p>
             </Section> 

             <Section id="teams" title="Team Members" mode="light">
                 <p className="my-4"><b>Hilman Mauludin</b>,<i>Game Programmer</i>, Oversees all technical aspects of game development, 
                 ensuring smooth performance, coding game mechanics, and integrating visual assets into the game engine.</p>

                 <p className="my-4"><b>Yudhistira Irja Wiguna</b>,<i>2D Artist & Animator</i>, Responsible for designing and animating characters, 
                 environments, and visual effects, providing a unique artistic style for our 2D projects.</p>

                 <p className="my-4"><b>Bill Galvin</b>,<i>3D Artist</i>, Creates high-quality 3D models and environments that 
                 add depth and realism to our game worlds.</p>

                 <p className="my-4"><b>Reihan</b>,<i>3D Animator</i>, Brings movement and life to the 3D models, ensuring they interact 
                 fluidly within the game environments, enhancing immersion and player experience. </p>
             </Section>

             <RightMenu links={links}></RightMenu>
        </main>
    );
}