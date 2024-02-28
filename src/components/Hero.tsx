import React from 'react'
import SearchForm from './SearchForm'

function Hero() {
    return (
        <section className=' min-h-screen hero flex justify-center items-center'>
            <div className=' max-w-4xl flex flex-col gap-6 items-center pb-10'>
                <div className=' text-white'>
                    <h1 className=' text-3xl sm:text-4xl lg:text-6xl font-bold text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h1>
                    <p className=' text-slate-300 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repellendus!
                    </p>
                </div>
                <SearchForm />
            </div>
        </section>
    )
}

export default Hero