import React from 'react'
import { useState } from 'react';

import { Link } from "react-router-dom"

import Hamburger from 'hamburger-react'

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Zoom from '@mui/material/Zoom';

function HamburgerMenu({color}) {
  const [isOpen, setOpen] = useState(false);

  const menu = [['ACCUEIL','/'],['LES MUSICIENS','/musiciens'],['MRS ROBINSON BAND','/mrs-robinson-band'],['PHOTOS','/photos'],['AGENDA','/agenda'],['VIDEOS COMPLEMENTAIRES','/'],['CONTACT','/contact']]

  return (
    <ClickAwayListener onClickAway={() => {setOpen(false)}}>
      <div>
        <Hamburger toggled={isOpen} size={30} toggle={setOpen} color={color ? "black" : 'white'}/>
        <Zoom in={isOpen}>
          <div className='border-2 border-solid border-white rounded-xl bg-gray-50 absolute z-20 shadow-md mt-4 ml-3'>
            <ul>
            {menu.map((e) => (
                <Link key={e[0].toString()} className='py-5 px-4 text-base block shadow-md font-semibold custom-transition hover:bg-gray-100 rounded-xl' to={e[1]}  style={{textDecoration: 'none', }}><li>{e[0]}</li></Link>
            ))}
            </ul>
          </div>
        </Zoom>
      </div>
    </ClickAwayListener>
  )
}

export default HamburgerMenu