'use client';

import { useState } from 'react';
import styles from './ContactUs.module.css';
import rocketImg from '../../../public/static/images/plane.png';
import msgImg from '../../../public/static/images/msg.png';
import Image from 'next/image';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate form submission (you can replace it with an actual API call)
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setFormStatus('Thank you for your message! We will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setFormStatus('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contact-us' className={styles.contactUsSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Contact Us</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your Message"
                            className={styles.textarea}
                        ></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
                {formStatus && <p className={styles.formStatus}>{formStatus}</p>}
            </div>
            <div className={`${styles.rocketShape}`}>
                <Image src={rocketImg} height={300} width={300} alt='rocket' />
            </div>
            <div className={`${styles.msgShape}`}>
                <Image src={msgImg} height={150} width={150} alt='msg' />
            </div>
        </section>
    );
};

export default ContactUs;
