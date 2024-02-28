import { NAV_LINKS } from '@/constants'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

function NavBar() {
    return (
        <header className='fixed w-screen px-4 top-2 z-50'>
            <nav className=' p-3 container flex items-center justify-between bg-background rounded-md z-50'>
                <h1>Kasi Spaces</h1>

                <ul className=' hidden lg:flex items-center gap-4'>
                    {NAV_LINKS.map((link) => (
                        <li key={link.title}>
                            <Link className=' text-muted-foreground hover:text-primary hover:underline' href={link.href}>
                                {link.title}
                            </Link>
                        </li>
                    ))}

                </ul>

                <p>List Now</p>
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
                            </ul>
                        </SheetContent>
                    </Sheet>

                </div>
            </nav>
        </header>

    )
}

export default NavBar