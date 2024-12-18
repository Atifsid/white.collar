import styles from './AboutUs.module.css';
import infoImg from '../../../public/static/images/info.png';
import logo from '../../../public/static/images/logo.jpeg';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <section id='AboutUs' className={styles.aboutUs}>
            <div className={styles.container}>
                <h1 className={styles.title}>About Us</h1>
                <div className='flex justify-center my-6'>
                    <Image src={logo} height={150} width={150} alt='logo' style={{ borderRadius: 12 }} />
                </div>
                <p className={styles.paragraph}>
                    We started our prestigious journey in <strong>2019</strong>, with the idea of making everybody reachable
                    for good quality media operations. So we started gathering some of the best quality equipment to enhance
                    the user experience and bring together very experienced and professional staff.
                </p>
                <p className={styles.paragraph}>
                    With a history of 6 years of excellent service, we assure you an immense experience working with renowned
                    professionals across India.
                </p>
                <p className={styles.motto}>WE JUST WORK TO WIN.</p>
            </div>
            <div className={`${styles.infoShape}`}>
                <Image src={infoImg} height={100} width={100} alt='msg' />
            </div>
        </section>
    );
}
