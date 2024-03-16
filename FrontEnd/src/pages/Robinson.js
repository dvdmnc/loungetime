import React from 'react'

import Layout from './Layout'
import InfiniteHorizontal from '../components/InfiniteHorizontal'

import {motion} from 'framer-motion'

import useFetch from '../components/Fetch'

import MrsRobinson from '../Images/mrs_robinson.png'

function Robinson() {
    const data = useFetch('/mrs-robinson-band')
    const titleAnimation = {
        hidden:{
          y:500
        },
        show:{
          y:0,
          transition: {
            staggerChildren: 0.2
          }
        }
      }
    
      const item = {
        hidden : {y: 500},
        show: {y:0}
      }
  return (
    <Layout color={'black'}>
        {data ?
        <div className='bg-gray-100 h-screen w-screen overflow-x-hidden'>
            <div className='w-screen h-fit flex items-center justify-between ml-5'>
                <motion.div className='text-justify max-[470px]:h-52 max-[470px]:overflow-y-scroll'
                variants={titleAnimation}
                initial='hidden'
                animate='show'>
                    <motion.h1 className='font-dancingScript text-xl sm:text-3xl md:text-5xl xl:text-8xl mt-5 mb-5 text-center' variants={item}>{data.imgs[0].titre}</motion.h1>
                    <motion.p className='text-xs sm:text-sm xl:text-xl md:text-base font-IBM' variants={item}>{data.imgs[0].texte}</motion.p>
                </motion.div>
                <motion.img src={data.imgs[0].url} alt={data.imgs[0].titre} className='mt-[5vh] w-1/2 lg:w-auto'
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.5 }}/>
            </div>
            <InfiniteHorizontal  data={data}/>
            <img src={MrsRobinson} className='m-auto'/>
        </div>
        : null}
    </Layout>
  )
}

export default Robinson