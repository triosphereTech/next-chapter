import FAQ from '@/components/common/FAQ'
import Cta from '@/components/home/cta'
import Hero from '@/components/home/hero'
import Hero2 from '@/components/home/Hero2'
import Intro from '@/components/home/intro'
import Services from '@/components/home/services'
import StripeSection from '@/components/home/stripe'
import Testimonial from '@/components/home/Testimonial'
import WhyChooseUs from '@/components/home/whychooseus'
import React from 'react'
import { BluginFaq } from "@blugin/next"; // or "@blugin/react"

const page = () => {
  return (
    <>
    <div className='pt-10'>
    <Hero/>
    <Intro/>
    <Services/>
    <StripeSection/>
    <WhyChooseUs/>
    <Testimonial/>
    <Cta/>
    {/* <FAQ/> */}
    <BluginFaq slug="home-page" />
    </div>
    </>
  )
}

export default page
