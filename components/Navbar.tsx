"use client"
import Image from 'next/image';
import { Container } from './Container';
import logo from "@/public/images/logo.webp"
import Link from 'next/link';
import { navLinks } from '@/app/data/navLinks';
import { useEffect, useState } from 'react';
export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    const renderLinks = () => {
        return navLinks.map((link) => {
            return <Link
                className={`${activeLink === link.href ? " text-blue-500 font-semibold border-b border-blue-600" : "font-semibold"}`}
                onClick={() => { setIsMenuOpen(false); setActiveLink(link.href) }}
                key={link.href}
                href={link.href}>
                {link.name}
            </Link>

        })
    }
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(`#${entry.target.id}`);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    return (
        <nav className="border-b z-50 border-slate-200 bg-white sticky top-0 left-0 backdrop-blur">
            <Container className="flex items-center justify-between py-4">
                <Link href="/" className="text-lg font-semibold">
                    <Image src={logo} height={60} width={100} alt='logo' />
                </Link>
                {/* desktop navlinks  */}
                <div className="md:flex gap-10 text-md hidden   text-black">
                    {
                        renderLinks()
                    }
                </div>
                {/* dropdown navlinks  */}
                <div className={`flex-col flex gap-10 absolute top-full mt-2 right-5  text-md md:hidden bg-white backdrop-blur-2xl  shadow-md rounded-lg p-6  text-black ${isMenuOpen ? "" : "hidden"}`}>
                    {
                        renderLinks()
                    }
                </div>
                {/* drop down button  */}
                {
                    isMenuOpen ?
                        <button
                            aria-label='close menu'
                            className='md:hidden' onClick={() => setIsMenuOpen(false)}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-8 h-8 text-black cursor-pointer"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        </button>

                        :
                        <button
                            aria-label='open menu'

                            className='md:hidden' onClick={() => setIsMenuOpen(true)}>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8 text-black cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>



                }
            </Container>
        </nav>
    );
}
