"use client";
import React, { useEffect, useRef } from "react";


export default function NavCategorias({ children }: any) {
    const refNav = useRef<HTMLElement>(null)

    const FixedTop = () => {
        console.log('chamo222')
        if (window.scrollY > 50 && refNav.current) {
            refNav.current.classList.add('fixed-top');
            // add padding top to show content behind navbar
            const navbar_height = refNav.current.offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else if (refNav.current) {
            refNav.current.classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    }

    useEffect(() => {
        console.log('hamooooooooooooo')
        if (window.innerWidth < 1000) {
            window.addEventListener('scroll', () => FixedTop());
        }

        return () => window.removeEventListener('scroll', () =>  FixedTop())
    }, [])
    return (<nav ref={refNav} className="navbar overlista" id="categorias">
        {children}

    </nav>)
}