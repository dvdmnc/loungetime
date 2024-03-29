import React, { useRef } from 'react'
import { useState } from 'react'

import emailjs from '@emailjs/browser';

import Layout from './Layout'

function Contact() {
  const[sent, setSent] = useState(false)
  const[err, setError] = useState(false)

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j6owzlh', 'template_lbu1ufd', form.current, {
        publicKey: 'OZi2CAQap6jRhbSed',
      })
      .then(
        () => {
          setSent(true)
          setTimeout(() => {
            setSent(false)
          }, 5000)
        },
        (error) => {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 5000)
        },
      );
  };
  return (
    <Layout color={'black'}>
      <section className="bg-white mt-[12vh]">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Nous contactez</h2>
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre mail</label>
                    <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="patrickdupont@exemple.com" name="email"/>
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet</label>
                    <input type="text" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Vos tarifs.. Reserver une prestation.."  name="subject"/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
                    <textarea rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" name="message"/>
                </div>
                {sent ? <p className='text-green-500'>Message envoyé, nous vous répondrons dès que possible !</p> : null}
                {err ? <p className='text-red-500'>Il semblerait qu'il y ai un problème.. Veuillez réessayer plus tard. Vous pouvez sinon nous contacter au 06 49 44 03 38</p> : null}
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg border-black border-2 sm:w-fit">Envoyer</button>
            </form>
        </div>
      </section>
    </Layout > 
  )
}

export default Contact