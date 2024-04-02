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
                    <li key={date.jour} className='mb-[2vh]'>
                    <div className='flex items-center sm:ml-[15vw] '><img src={Guitar} alt='guitar-icon' /><b>{date.jour} {date.mois} à {date.heure}h</b>: {date.titre}</div>
                    </li>
                ))}
            </ul>
        </div>
    )) }
    {previousYears && Object.entries(previousYears).reverse().map((année) =>(
        <div key={année[0]} className='mt-[12vh] mb-8'>
            <h1 className='poppins-bold text-5xl text-center text-gold mb-5'>{année[0]}</h1>
            <ul className='font-IBM text-sm sm:text-lg md:text-xl '>
                {année[1].map((date,index) => (
                    <li key={`date${index}de${année[0]}`} className='mb-[2vh]'>
                    <div className='flex items-center sm:ml-[15vw]'><img src={Guitar} alt='guitar-icon' /><b>{date.split(':')[0]}</b> : {date.split(':').slice(1)}</div>
                    </li>
                ))}
            </ul>
        </div>
    )) }
    </Layout>
  )
}

export default Agenda
