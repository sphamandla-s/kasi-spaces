import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function About() {
  return (
    <section className=' container pt-20 pb-32 grid lg:grid-cols-2 gap-10 items-center'>
      <div>
        <div className=' relative h-fit w-fit'>
          <Image src='/patrick-ward-bVovHygDlJI-unsplash.jpg'
            alt='about-image'
            height={400}
            width={400}
            className=' object-cover border-4'
          />
          <Image src='/devon-janse-van-rensburg-RAAXmcYdoIg-unsplash.jpg'
            alt='about-image'
            height={300}
            width={300}
            className='absolute top-1/2 left-1/2 border-4 object-cover hidden lg:block'
          />
          
        </div>
      </div>
      <div>
        <h2 className='font-semibold mb-1'>About Us</h2>
        <h3 className=' text-3xl mb-2 font-extralight'>empower and streamline real estate.</h3>
        <p className=' text-muted-foreground mb-4'>
          Kasi Spaces is a pioneering real estate management platform built with the specific needs
          of property owners, managers, and professionals in mind. We understand the challenges of
          juggling multiple tasks and maintaining efficient operations. That's why we offer a
          comprehensive and user-friendly solution that streamlines everyday tasks, automates
          workflows, and empowers you to focus on what matters most – your success.
          Our scalable platform adapts to your growing portfolio, whether you have a
          few properties or a large-scale operation. We equip you with the tools and
          insights needed to maximize efficiency, optimize profitability, and make
          data-driven decisions that propel your real estate journey forward.
          Join the future of real estate management with Kasi Spaces and experience
          the power of simplicity, automation, and success.
        </p>
        <Button>Read More</Button>
      </div>
    </section>
  )
}

export default About