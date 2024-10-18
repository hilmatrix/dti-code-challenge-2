
import TeamMember from "@/components/teamMember";

export default function Teams() {
    return (
        <main>
            <section id="teams">
              <div className='bg-charcoal-gray p-10 text-white'>
               <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4 "><h1>Meet the Team at Numinus Artspace</h1></span>
                 <p className="text-justify">
                 At Numinus Artspace, we are a small but passionate team of creative professionals dedicated 
                 to bringing innovative games and interactive experiences to life. Our team brings together 
                 unique skills that combine art and technology to create immersive game worlds.
                 </p>
               </div>
             </section>

             <section id="team-member">
               <TeamMember imageUrl="/team-hilmatrix.jpg" name="Hilman Mauludin" role="Game Programmer" contact="hilman@gmail.com"
               description="Our game programmer, who specializes in coding and technical development, is responsible
                for turning ideas into playable games. With a deep understanding of game mechanics and logic, they 
                ensure smooth gameplay and functionality across platforms."></TeamMember>
             </section>

             <section id="team-member">
               <TeamMember imageUrl="/team-anonymous.jpg" name="Yudhistira Irja Wiguna" role="2D Artist & Animator" contact="yudhi@gmail.com"
               description="Our 2D artist and animator brings characters and environments to life 
               with stunning visuals and fluid animations. From concept art to final designs, they 
               handle the creative process behind everything you see in our 2D worlds."></TeamMember>
             </section>

             <section id="team-member">
               <TeamMember imageUrl="/team-anonymous.jpg" name="Bill Galvin" role="3D Artist" contact="galvin@gmail.com"
               description="The 3D artist specializes in modeling, texturing, and creating visually compelling 
               assets for our games. They breathe life into our 3D characters, environments, and objects with 
               detailed artistry and attention to realism."></TeamMember>
             </section>

             <section id="team-member">
               <TeamMember imageUrl="/team-anonymous.jpg" name="Reihan" role="3D Animator" contact="reihan@gmail.com"
               description="Our 3D animator focuses on giving movement and personality to the 3D 
               characters and scenes. Their work ensures that every model interacts fluidly with 
               the game world, creating dynamic and immersive experiences."></TeamMember>
             </section>
        </main>
    );
}