import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
config.autoAddCss = false


library.add(faFacebook, faInstagram, faLinkedin, faYoutube, faDiscord);

export default function Footer() {
    return (
        <footer className="bg-black h-24 md:h-16 text-white flex flex-col md:flex-row items-center justify-evenly md:justify-between">
            <span className='mx-4'>&copy; 2024 Numinus Artspace. All Rights Reserved.</span>
            <div>
                {/*
                <Link className='mx-4' href="https://facebook.com/hilmatrix"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></Link>
                <Link className='mx-4' href="https://instagram.com/hilmatrix"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></Link>
                <Link className='mx-4' href="https://linkedin.com/u/hilmatrix"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></Link>
                <Link className='mx-4' href="https://www.youtube.com/@hilmatrix"><FontAwesomeIcon icon={['fab', 'youtube']} size="2x" /></Link>
                */}
                <Link className='mx-4' href="https://discord.gg/ngHVYv7P"><FontAwesomeIcon icon={['fab', 'discord']} size="2x" /></Link>
            </div>
        </footer>
    );
}

