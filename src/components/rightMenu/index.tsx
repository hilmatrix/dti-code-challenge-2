import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { useState } from "react";


export default function RightMenu() {
    const [showRightMenu, setShowRightMenu] = useState(false);

    return (
        <div className="fixed right-0 top-0 z-5 w-full h-full pointer-events-none">

            <div data-testid="right-menu" className={`absolute w-[300px] h-full  ${showRightMenu ? "right-0" : "right-[-300px]"} 
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
              <button data-testid="show-right-menu" onClick={() => {setShowRightMenu(!showRightMenu)}} className="m-10 flex justify-center items-center w-20 h-20 bg-[#000000] rounded-full pointer-events-auto">
                <FontAwesomeIcon icon={faBars} color="white" size="2x" />
              </button>
            </div>
        </div>
    );
}
