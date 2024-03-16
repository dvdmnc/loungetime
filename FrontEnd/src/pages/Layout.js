import {React, useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import { motion } from "framer-motion"

import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import HamburgerMenu from '../components/HamburgerMenu';

const Layout = ({ children, color }) => {
    const menu = [['ACCUEIL','/'],['LES MUSICIENS','/musiciens'],['MRS ROBINSON BAND','/mrs-robinson-band'],['PHOTOS','/photos'],['AGENDA','/agenda'],['VIDEOS COMPLEMENTAIRES','/'],['CONTACT','/contact']]

    const [isFixed, setIsFixed] = useState(false);
    const [hasBackground, setHasBackground] = useState(false);
    

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isFixed) {
        setIsFixed(true);
        setHasBackground(true);
      } else if (window.scrollY === 0 && isFixed) {
        setIsFixed(false);
        setHasBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  const navStyle = {
    position: isFixed ? 'fixed' : 'absolute',
    transition: 'position 0.5s, background-color 0.5s'
  }

  const listStyleWhite = {
    backgroundColor: hasBackground ? 'black' : 'transparent',
    transition: 'position 0.5s, background-color 0.5s',
    color: 'white',
    border: '2px solid white'
  }

  const listStyleBlack = {
    backgroundColor: hasBackground ? 'black' : 'transparent',
    transition: 'position 0.5s, background-color 0.5s',
    color: hasBackground ? 'white':'black',
    border: '2px solid black'
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
        <div className='absolute top-0 z-20 xl:hidden'><HamburgerMenu color={color}/></div>
        <motion.ul className='xl:flex justify-center text-xl top-0 w-screen z-20 hidden' style={navStyle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, type:'spring'}}>
            {menu.map((e) => (
                <li style={color ? listStyleBlack : listStyleWhite} key={e[0].toString()} className='m-5 font-dancingScript rounded-md p-2 hover:translate-y-2'><Link to={e[1]}>{e[0]}</Link></li>
            ))}
        </motion.ul>
        <Fab aria-label="Back to Top" onClick={scrollToTop} id='GoToTop'>
        <ArrowUpwardIcon />
        </Fab>
      {children}
      <footer>

      </footer>
    </>
  );
}

export default Layout;