import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="p-4 md:p-8 lg:p-10 bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white">
                    Kasi Spaces
                </a>
                <p className="my-6 text-gray-400">Elevating Real Estate Management: Streamlined, Automated, Scalable. Empowering property owners and professionals with comprehensive tools for efficient management, tenant engagement, and financial control.</p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-white">

                    {NAV_LINKS.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className="mr-4 hover:underline md:mr-6 ">
                                {link.title}
                            </Link>
                        </li>
                    ))}

                </ul>
                <span className="text-sm  sm:text-center text-gray-400">©2024 <Link href="#" className="hover:underline">Kasi Spaces</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer