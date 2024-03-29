import React from 'react'

import Layout from './Layout'
import InfiniteHorizontal from '../components/InfiniteHorizontal'

import {motion} from 'framer-motion'

import useFetch from '../components/Fetch'

import MrsRobinson from '../Images/mrs_robinson.png'

import Grid from '@mui/material/Grid';

function Robinson() {
    const data = useFetch('/mrs-robinson-band')
  
    const item = {
      hidden : {y: 500},
      show: {y:0}
    }
  return (
    <Layout color={'black'}>
      {data &&
      <>
      <Grid container spacing={1} sx={{alignItems:'center', paddingX:'5vw',marginTop:'12vh', marginBottom:'5vh'}}>
        <Grid item md={5}>
          <motion.img src={MrsRobinson}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
          />
        </Grid>
        <Grid item md={7} >
          <motion.p className='xl:text-5xl text-3xl font-dancingScript'
          initial={{ y: 500}}
          animate={{ y: 0,}}
          transition={{ duration: 0.5 }}>{data.imgs[0].texte}</motion.p>
        </Grid>
      </Grid>
      <InfiniteHorizontal data={data} bgcolor={'white'}/>
      </>
      }
    </Layout>
  )
}

export default Robinson