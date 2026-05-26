import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NAVIGATION_LINKS } from '../constants';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetId = href.startsWith('#') ? href.substring(1) : href;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = -85;
            const offsetPosition =
                targetElement.getBoundingClientRect().top + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 z-50 lg:top-4 selection:bg-pink-100/50'>
                <div className='mx-auto hidden max-w-max items-center justify-center rounded-full border border-white/30 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center px-6 py-2'>
                        <ul className='flex items-center gap-6 px-4'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a
                                        className='text-sm hover:text-stone-300'
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='py-2 backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between'>
                        <a href='#'>
                            <span className='pl-2 uppercase'>
                            </span>
                        </a>
                        <button
                            className='focus:outline-none'
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMobileMenuOpen ? (
                                <RiCloseLine className='m-2 h-6 w-5' />
                            ) : (
                                <RiMenu3Line className='m-2 h-6 w-5' />
                            )}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <ul className='my-4 ml-4 flex flex-col gap-6 backdrop-blur-md pb-5 mt-2 lg:hidden'>
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a
                                    className='block w-full text-lg hover:text-stone-300'
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default Navbar;