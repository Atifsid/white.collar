import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className={styles.stickyHeader}>
            <div className='flex justify-center'>
                <div className={styles.content}>
                    <Image src={`https://img.icons8.com/?size=100&id=108544&format=png&color=000000`} height={50} width={50} alt={''} />

                    <nav>
                        <a href="#AboutUs" className={`${styles.navLink} hover:text-red-600`}>
                            About Us
                        </a>
                        <a href="#services" className={`${styles.navLink} hover:text-red-600`}>
                            Services
                        </a>
                        <a href="#services" className={`${styles.navLink} hover:text-red-600`}>
                            Contact Us
                        </a>
                        <a href="#services" className={`${styles.navLink} hover:text-red-600`}>
                            Hire Us
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
