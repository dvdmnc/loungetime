import React from 'react'

import Layout from './Layout'

import useFetch from '../components/Fetch'

import QuiltedImageList from '../components/ImageList'

function Photos() {
    const data = useFetch('/photos')
  return (
    <Layout color={'black'}>
    {data ?
    <div className='flex items-center justify-center h-screen w-screen'>
    <QuiltedImageList data={data} />
    </div>
    : null}
    </Layout>
  )
}

export default Photos