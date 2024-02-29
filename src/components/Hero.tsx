import React from 'react'
import SearchForm from './SearchForm'
import { HeroParallax } from './ui/hero-parallax'
import { products } from '@/constants'

function Hero() {
    return (
        <section className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
        <HeroParallax products={products} />;

        </section>
    )
}

export default Hero