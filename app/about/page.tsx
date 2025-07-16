import dynamic from 'next/dynamic';

const AboutPageContent = dynamic(() => import('@/components/AboutPageContent'), {
  ssr: false,
});

export default function About() {
  return <AboutPageContent />;
}