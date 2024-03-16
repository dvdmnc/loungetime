import React from 'react'
import { motion } from "framer-motion"

import Layout from './Layout'

import InfiniteHorizontal from '../components/InfiniteHorizontal'
import useFetch from '../components/Fetch'

function Accueil() {
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

  const data = useFetch('')

  return (
    <Layout>
      {data ?
      <>
      <div className='relative lg:h-fit overflow-hidden'>
        <motion.img 
        initial={{ opacity: 0}}
        animate={{ opacity: 0.8}}
        transition={{ duration: 0.5 }}
        src={data.imgs[0].url} alt={data.imgs[0].titre} className='w-screen' />
        <motion.div className='absolute z-10 text-center w-screen h-1/2 top-1/2'
        variants={titleAnimation}
        initial='hidden'
        animate='show'
        >
          <motion.h1 className='font-monoton lg:text-8xl sm:text-7xl text-4xl text-white bg-opacity-50 bg-black'
          variants={item}
          >{data.imgs[0].titre}</motion.h1>
          <motion.h3 className='font-dancingScript lg:text-5xl sm:text-3xl text-xl text-white bg-opacity-50 bg-black'
          variants={item}
          >{data.imgs[0].texte}</motion.h3>
        </motion.div>
      </div>
        <InfiniteHorizontal  data={data}/>
      <div className='relative text-center'>
      <motion.img 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5 }}
        src={data.imgs[1].url} alt={data.imgs[1].titre} className='w-screen' />
      </div>
      </> :
    null}
    </Layout>
  )
}

export default Accueil