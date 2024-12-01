'use client';
import React, { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const hideMenu = () => setMenuOpen(false);

    return (
        <header className={styles.stickyHeader}>
            <div className='flex justify-center'>
                <div className={styles.content}>
                    <Image
                        src={`https://img.icons8.com/?size=100&id=108544&format=png&color=000000`}
                        height={50}
                        width={50}
                        alt={''}
                    />

                    <div className={`${menuOpen ? `${styles.menuOpen} ${styles.navContainer}` : ''}`}>
                        <nav>
                            <a href="#AboutUs" className={`${styles.navLink} hover:text-red-600`} onClick={hideMenu}>
                                About Us
                            </a>
                            <a href="#services" className={`${styles.navLink} hover:text-red-600`} onClick={hideMenu}>
                                Services
                            </a>
                            <a href="#contact-us" className={`${styles.navLink} hover:text-red-600`} onClick={hideMenu}>
                                Contact Us
                            </a>
                            <a href="#services" className={`${styles.navLink} hover:text-red-600`} onClick={hideMenu}>
                                Hire Us
                            </a>
                        </nav>
                    </div>

                    <button className={styles.menuButton} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className="fas fa-bars" style={{ color: "white" }} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
