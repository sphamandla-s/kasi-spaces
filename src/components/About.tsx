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
            className=' object-cover'
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
        <h3 className=' text-3xl mb-2 font-extralight'>Lorem ipsum dolor sit amet consectetur.</h3>
        <p className=' text-muted-foreground mb-4'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Sunt repudiandae temporibus iste! Quia iure quidem pariatur.
          Nemo quam dolorum aperiam maiores earum. Exercitationem
          blanditiis aliquid sed praesentium a aliquam eos possimus
          modi. Laboriosam, voluptatibus. Magni temporibus beatae qui
          asperiores? Ducimus sunt, amet ut aspernatur ab vel dignissimos!
          Et, facere perspiciatis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolores
          officia sit accusamus consectetur commodi deleniti delectus voluptatum
          velit et quisquam eum provident hic magni expedita magnam distinctio,
          dolorum in asperiores, inventore dolorem. Minus fuga nesciunt et
          doloremque vero architecto enim ipsam eligendi voluptates voluptas quis
          harum alias cupiditate, autem asperiores ab veniam assumenda iste necessitatibus
          mollitia soluta corrupti repudiandae! Tenetur officiis doloribus accusantium.
        </p>
        <Button>Read More</Button>
      </div>
    </section>
  )
}

export default About