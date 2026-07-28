import AboutHero from '@/components/about/hero'
import VisionMission from '@/components/about/VisionMission'
import WhoWeAre from '@/components/about/WhoWeAre'
import Cta from '@/components/home/cta'
import StripeSection from '@/components/home/stripe'
import React from 'react'

const page = () => {
  return (
    <>
      <AboutHero/>
      <WhoWeAre/>
      <StripeSection/>
      <VisionMission/>
    </>
  )
}

export default page
