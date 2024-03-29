import React from 'react'

import Layout from './Layout'

import useFetch from '../components/Fetch'

import Guitar from '../Images/guitare.png'

function Agenda() {
    const data = useFetch('/agenda')
    var previousYears = require('../agenda.json')

  return (
    <Layout color={'black'}>
    {data && Object.entries(data).reverse().map((année) =>( //Use Object.entries because we can't use map directly on a dict //Even if on the backend, the dict is sorted from the most recent to the least year, it appears on the front end from the least to the most recent year so i had to use reverse()
        <div key={année[0]} className='mt-[12vh] mb-8'>
            <h1 className='poppins-bold text-5xl text-center text-gold mb-5'>{année[0]}</h1>
            <ul className='font-IBM text-sm sm:text-lg md:text-xl'>
                {année[1].map((date) => (
                    <div key={date.jour} className='flex items-center justify-center'><img src={Guitar} alt='guitar-icon' /><li>Le {date.jour} {date.mois} à {date.heure}h, {date.titre}</li></div>
                ))}
            </ul>
        </div>
    )) }
    {previousYears && Object.entries(previousYears).reverse().map((année) =>(
        <div key={année[0]} className='mt-[12vh] mb-8'>
            <h1 className='poppins-bold text-5xl text-center text-gold mb-5'>{année[0]}</h1>
            <ul className='font-IBM text-sm sm:text-lg md:text-xl'>
                {année[1].map((date,index) => (
                    <div key={`date${index}de${année[0]}`} className='flex items-center justify-center'><img src={Guitar} alt='guitar-icon' /><li>{date}</li></div>
                ))}
            </ul>
        </div>
    )) }
    </Layout>
  )
}

export default Agenda