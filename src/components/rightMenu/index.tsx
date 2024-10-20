"use client"

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { useState } from "react";

interface Link {
  href : string;
  label : string;
}

interface Props {
  links : Link[];
}

export default function RightMenu(props : Props) {
    const [showRightMenu, setShowRightMenu] = useState(false);

    return (
        <div className="fixed right-0 top-0 z-5 w-full h-full pointer-events-none">

            <div data-testid="right-menu" className={`absolute w-[300px] h-full  ${showRightMenu ? "right-0" : "right-[-300px]"} 
              flex items-center transition-all duration-500 ease-in-out`}>
              <div className={`w-full h-[400px] bg-[#000000] flex justify-center items-center`}>
                <div className="w-[70%] h-[70%] text-white pointer-events-auto flex flex-col justify-around">
                  {props.links.map( (link, index) => (
                    (<Link key={index} onClick={() => {setShowRightMenu(false)}} href={link.href}>{link.label}</Link>)
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0">
              <div className='m-10 mb-20 w-[74px] h-[74px] bg-light-gray rounded-full flex justify-center items-center'>
              <button data-testid="show-right-menu" onClick={() => {setShowRightMenu(!showRightMenu)}} className="flex justify-center items-center w-[70px] h-[70px] bg-[#000000] rounded-full pointer-events-auto">
                <FontAwesomeIcon icon={faBars} color="white" size="2x" />
              </button>
              </div>
            </div>
        </div>
    );
}
