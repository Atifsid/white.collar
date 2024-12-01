import React from "react";
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto text-center">
                <div className="flex flex-col md:flex-row justify-center items-center justify-between">
                    <p className="text-sm">&copy; {currentYear} White Collar. All rights reserved.</p>
                    <nav className={styles.nav}>
                        <ul className="flex gap-4 text-sm">
                            <li>
                                <a
                                    href="#AboutUs"
                                    className="hover:underline transition-colors duration-200"
                                >
                                    About Us
                                </a>
                            </li>
                            <span>|</span>
                            <li>
                                <a
                                    href="#services"
                                    className="hover:underline transition-colors duration-200"
                                >
                                    Services
                                </a>
                            </li>
                            <span>|</span>
                            <li>
                                <a
                                    href="#contact-us"
                                    className="hover:underline transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
