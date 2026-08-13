import ContactForm from '@/components/contact/ContactForm'
import GoogleMap from '@/components/contact/GoogleMap'
import Hero from '@/components/contact/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <div id="booking">
      <ContactForm />
      </div>
      <GoogleMap />
    </>
  )
}

export default page
