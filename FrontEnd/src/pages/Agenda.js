import React from 'react'

import Layout from './Layout'

import useFetch from '../components/Fetch'

import Black from '../Images/blackpaint.png'
import Guitar from '../Images/guitare.png'

function Agenda() {
    const data = useFetch('/agenda')

  return (
    <Layout color={'black'}>
    {data && Object.entries(data).reverse().map((année) =>( //Use Object.entries because we can't use map directly on a dict //Even if on the backend, the dict is sorted from the most recent to the least year, it appears on the front end from the least to the most recent year so i had to use reverse()
        <div key={année[0]} className='mt-[12vh] text-center relative mb-8'>
            <img src={Black} alt='black-paint' className='xl:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 h-auto m-auto'/>
            <h1 className='absolute top-1/2 left-1/2 -ml-16 -mt-8 poppins-bold text-5xl text-center text-gold'>{année[0]}</h1>
            <ul className='font-IBM text-sm sm:text-lg md:text-xl'>
                {année[1].map((date) => (
                    <div key={date.jour} className='flex items-center justify-center'><img src={Guitar} alt='guitar-icon' /><li className=''>Le {date.jour} {date.mois} à {date.heure}h, {date.titre}</li></div>
                ))}
            </ul>
        </div>
    )) }
    </Layout>
  )
}

export default Agenda