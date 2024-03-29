import React from 'react'

import Layout from './Layout'

import { motion } from "framer-motion"

import Grid from '@mui/material/Grid';

import useFetch from '../components/Fetch';

function Musiciens() {
    const data = useFetch('/musiciens')

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
        {data && data.map((musicien) => (
             <Grid container spacing={1} key={musicien.id} className='musician-container' sx={{marginTop:'10vh'}}> {/* Had to use sx to overwrite marginTop of Grid component, didn't work with className */}
                {musicien.id % 2 === 0 ?
                <>
                <Grid item xs={12} md={7}>
                    <motion.div
                    variants={titleAnimation}
                    initial='hidden'
                    animate='show'
                    >
                        <motion.h1 className='font-dancingScript text-4xl md:text-5xl xl:text-8xl mt-5 mb-5 text-center' variants={item}>{musicien.titre}</motion.h1>
                        <motion.p className='xl:text-xl text-base font-IBM' variants={item}>{musicien.texte}</motion.p>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={5}>
                    <motion.img src={musicien.url}
                    alt={musicien.titre}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5 }}/>
                </Grid>
                </>
                : <>
                    <Grid item xs={12} md={5}>
                        <motion.img src={musicien.url}
                        alt={musicien.titre}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 0.5 }}/>
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <motion.div
                        variants={titleAnimation}
                        initial='hidden'
                        animate='show'
                        >
                            <motion.h1 className='font-dancingScript text-4xl md:text-5xl xl:text-8xl mt-5 mb-5 text-center' variants={item}>{musicien.titre}</motion.h1>
                            <motion.p className='xl:text-xl text-base font-IBM' variants={item}>{musicien.texte}</motion.p>
                        </motion.div>
                    </Grid>
                    </>}
            </Grid>
        ))}
    </Layout>
  )
}

export default Musiciens