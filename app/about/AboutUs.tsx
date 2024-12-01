import styles from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <section id='AboutUs' className={styles.aboutUs}>
            <div className={styles.container}>
                <h1 className={styles.title}>About Us</h1>
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
        </section>
    );
}
