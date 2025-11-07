import { Aurora } from './components/background/Aurora';
import { Footer } from './components/layout/Footer';
import { NavBar } from './components/layout/NavBar';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectSection } from './components/sections/ProjectSection';

function App() {
  return (
    <div className="relative min-h-screen">
      <Aurora />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-16 sm:px-6 lg:px-8">
        <NavBar />
        <main className="flex-1 space-y-10">
          <HeroSection />
          <ProjectSection />
          <ExpertiseSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
