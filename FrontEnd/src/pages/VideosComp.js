import React from 'react'
import Layout from './Layout'
import Grid from '@mui/material/Grid'
import useFetch from '../components/Fetch'

function VideosComp() {
  const data = useFetch('/videos')

  return (
    <Layout color={'black'}>
        <Grid container spacing={3} sx={{marginTop:'12vh', paddingX:'5vw'}}>
        {data && data.map((vid) => 
          <Grid item md={4} key={vid.titre} sx={{height:'40vh'}}>
            <iframe src={`https://www.youtube-nocookie.com/embed/${vid.IdVideo}?color=white`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={vid.titre}
            className='w-full rounded-xl h-full'/>
            </Grid>
        )
      }
      </Grid >
    </Layout>
  )
}

export default VideosComp