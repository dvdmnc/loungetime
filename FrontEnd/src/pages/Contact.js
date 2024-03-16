import React from 'react'

import useFetch from '../components/Fetch'

import fb from '../Images/facebook.png'
import whatsapp from '../Images/whatsapp.png'
import mail from '../Images/mail.png'

import Layout from './Layout'

function Contact() {
    const data = useFetch('/contact')
  return (
    <Layout >
    <div className='w-screen h-screen bg-black'>
        <div className='pt-[10vh] flex justify-center items-center'>
            <a href='mailto:pmenechi@orange.fr?subject=Contact depuis votre site web'><img src={mail}/></a>
            <a href='https://www.facebook.com/philippe.menechi'><img src={fb}/></a>
            <a href='//api.whatsapp.com/send?phone=33649440338&text=Bonjour, je vous contacte depuis votre site web'><img src={whatsapp}/></a>
        </div>
    </div>
    </Layout > 
  )
}

export default Contact