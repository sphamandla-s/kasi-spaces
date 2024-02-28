import { PROPERTY_TYPE_dummy_data } from '@/constants'
import React from 'react'
import PropertyCard from './propertyCard'

function Features() {
  return (
    <section className=' container pb-20'>
        <h3 className=' text-4xl text-center mb-2'>Trending Properties</h3>
        <p className=' text-center text-muted-foreground'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
            {PROPERTY_TYPE_dummy_data.map((property, index)=>(
                <PropertyCard {...property} key={index} />
            ))}
        </div>
    </section>
  )
}

export default Features