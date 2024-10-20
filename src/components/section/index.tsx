import React, { ReactNode } from 'react';

interface Props {
    id : string;
    title : string,
    mode : "light" | "dark";
    children : ReactNode;
}

const Section : React.FC<Props> = ({id, title, mode, children}) => {
    return (
      <section id={id} className={`p-10 ${mode === "light" ? 'bg-light-gray text-black' : 'bg-charcoal-gray text-white'}`}>
        <span className="text-xl md:text-2xl flex justify-center  font-semibold mb-4"><h1>{title}</h1></span>
        {children}
      </section>  
    );
}

export default Section;