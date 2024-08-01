import GridSection from '@/components/main/GridSection';
import HeroSection from '@/components/main/HeroSection';
import NavMenu from '@/components/main/NavMenu';

export default function Home() {
  return (
    <main className='w-full'>
      <NavMenu />
      <HeroSection />
      <GridSection />
    </main>
  );
}
