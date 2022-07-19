import AboutSection from '../components/pages/AboutSection';
import ClientesSection from '../components/pages/ClientesSection';
import FooterSection from '../components/pages/FooterSection';
import { HelpSection } from '../components/pages/HelpSection';
import LiderSection from '../components/pages/LiderSection';
import MainSection from '../components/pages/MainSection';
import PhotobarDivider from '../components/pages/PhotobarSection';
import { TimelineSection } from '../components/pages/TimelineSection';

export const LandingPage = () => {
  return (
    <>
      <MainSection />
      {/* <HelpSection /> */}
      <TimelineSection />
      <AboutSection />
      <PhotobarDivider />
      <LiderSection />
      <ClientesSection />
      <FooterSection />
    </>
  );
};
