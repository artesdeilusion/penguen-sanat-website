"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const detailsRef = useRef<HTMLDetailsElement>(null);

    const handleLinkClick = () => {
        if (detailsRef.current) {
            detailsRef.current.open = false; // Close the details element
        }
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const closeDropdown = () => setIsDropdownOpen(false);

    return (
        <>
            {/* Notification Bar */}
            <div className="navbar pb-6 bg-green-400 text-white fixed top-0 left-0 right-0 z-[11] h-16 flex justify-center items-center">
                <p className="text-center text-black text-sm font-medium">
                    Daha fazlasını mı merak ediyorsun?
                    <a href="http://free.penguensanat.com/" target="_blank" className="inline-block underline ml-1">Ücretsiz Deneme Dersi!</a>
                </p>
            </div>

            {/* Main Navbar */}
            <div className="navbar bg-white backdrop-blur-sm fixed top-12 left-0 right-0 z-[12] shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown" ref={dropdownRef}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="btn btn-ghost lg:hidden text-gray-600 hover:text-gray-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isDropdownOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
                            >
                                <li><Link href="/about" onClick={closeDropdown} className="text-gray-600 hover:text-gray-800">Hakkımızda</Link></li>
                                <li>
                                    <div className="text-gray-600">Kurslar</div>
                                    <ul className="p-2">
                                        <li><Link href="/courses/music" onClick={closeDropdown} className="text-gray-600 hover:text-gray-800">Müzik</Link></li>
                                        <li><Link href="/courses/chess" onClick={closeDropdown} className="text-gray-600 hover:text-gray-800">Satranç</Link></li>
                                        <li><Link href="/courses/paint" onClick={closeDropdown} className="text-gray-600 hover:text-gray-800">Resim</Link></li>
                                        <li><Link href="/courses/drama" onClick={closeDropdown} className="text-gray-600 hover:text-gray-800">Tiyatro ve Drama</Link></li>
                                        <li><Link href="/courses/robotics" onClick={closeDropdown} className="text-gray-600 hover:text-gray-800">Robotik Kodlama</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/highlights" onClick={closeDropdown} className="text-gray-600 hover:text-gray-800">Öne Çıkanlar</Link></li>
                           
                                <li><Link href="/market" onClick={closeDropdown} className="text-gray-600 hover:text-gray-800">Mağaza</Link></li>
                                <li><Link href="/workshop" onClick={closeDropdown} className="text-gray-600 hover:text-gray-800">Atölyeler</Link></li>

                            </ul>
                        )}
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl text-gray-700 hover:text-gray-900">
                        <img src="/penguensanateskilogo.png" alt="Penguen Sanat Logo" className="h-10" />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">
                        <li><Link href="/about" className="text-gray-600 hover:text-gray-800">Hakkımızda</Link></li>
                        <li>
                            <details ref={detailsRef}>
                                <summary className="text-gray-600 hover:text-gray-800">Kurslar</summary>
                                <ul className="p-2 shadow-md bg-white/90">
                                    <li><Link href="/courses/music" className="text-gray-600 hover:text-gray-800" onClick={handleLinkClick}>Müzik</Link></li>
                                    <li><Link href="/courses/chess" className="text-gray-600 hover:text-gray-800" onClick={handleLinkClick}>Satranç</Link></li>
                                    <li><Link href="/courses/paint" className="text-gray-600 hover:text-gray-800" onClick={handleLinkClick}>Resim</Link></li>
                                    <li><Link href="/courses/drama" className="text-gray-600 hover:text-gray-800" onClick={handleLinkClick}>Tiyatro ve Drama</Link></li>
                                    <li><Link href="/courses/robotics" className="text-gray-600 hover:text-gray-800" onClick={handleLinkClick}>Robotik Kodlama</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href="/highlights" className="text-gray-600 hover:text-gray-800">Öne Çıkanlar</Link></li>
                        <li><Link href="/market" className="text-gray-600 hover:text-gray-800">Mağaza</Link></li>
                        <li><Link href="/workshop" className="text-gray-600 hover:text-gray-800">Atölyeler</Link></li>

                    </ul>
                </div>

                <div className="navbar-end">
                    <a href="http://register.penguensanat.com" className="btn text-white bg-orange-500 border-none hover:bg-orange-600">Kayıt Ol</a>
                </div>
            </div>
        </>
    );
}
