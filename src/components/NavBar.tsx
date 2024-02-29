import { NAV_LINKS } from '@/constants'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { MovingBorderBtn } from './shared/MovingBorderBtn'
import Image from 'next/image'

function NavBar() {
    return (
        <header className='fixed w-screen px-4 top-2 z-50'>
            <nav className=' p-3 container flex items-center justify-between bg-background rounded-md z-50'>
            {/* <Image src={'/house-search-svgrepo-com.svg'} alt='camp' width={50} height={50} className=' absolute left-[15px] top-[-20px] w-10 lg:w-[50px]' /> */}
                <h1 className='kode-mono-logo'>Kasi Spaces</h1>

                <ul className=' hidden lg:flex items-center gap-4'>
                    {NAV_LINKS.map((link) => (
                        <li key={link.title}>
                            <Link className=' text-muted-foreground hover:text-primary hover:underline' href={link.href}>
                                {link.title}
                            </Link>
                        </li>
                    ))}

                </ul>

                <div className='hidden lg:block'>
                    <MovingBorderBtn title={'List Now'} />
                </div>


                <div className=' md:hidden'>
                    <Sheet>
                        <SheetTrigger> <Menu /></SheetTrigger>
                        <SheetContent>
                            <ul>
                                {NAV_LINKS.map((link) => (
                                    <li key={link.title}>
                                        <Link className=' text-muted-foreground hover:text-primary hover:underline' href={link.href}>
                                            {link.title}
                                        </Link>
                                    </li>))}
                                <MovingBorderBtn title={'List Now'} />
                            </ul>
                        </SheetContent>
                    </Sheet>

                </div>
            </nav>
        </header>

    )
}

export default NavBar