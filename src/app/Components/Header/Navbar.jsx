"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Navbar.scss';
import logo from '@/app/Components/Header/img/Logo.svg';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? 'scrolled' : ''}`}>
      <div className={`Navbar container ${isOpen ? 'open' : ''}`}>
        <div className="nav__logo">
          <Link href="/">
            <Image
              src={logo}
              width={200}
              height={200}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="nav__toggle" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <div className={`nav__items ${isOpen ? 'show' : ''}`}>
          <div className="items">
            <Link href="/">Home</Link>
            <Link href="/pages/blog">Blog</Link>
            <Link href="/pages/about">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>

          <div className="nav_btn">
            <Link href="/pages/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
