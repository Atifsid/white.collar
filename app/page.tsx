import GridSection from '@/components/main/GridSection';
import Header from '@/components/main/header/Header';
import HeroSection from '@/components/main/HeroSection';
import Hire from '@/components/main/Hire';
import AboutUs from './about/AboutUs';
import ContactUs from '../components/main/contactus/ContactUs';
import Footer from '@/components/main/footer/Footer';

export default function Home() {
  return (
    <main className='w-full'>
      <Header />
      <HeroSection />
      <AboutUs />
      <GridSection />
      <ContactUs />
      <Hire />
      <Footer />
    </main>
  );
}
