import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { OverviewSection } from './sections/OverviewSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { GenomicsSection } from './sections/GenomicsSection';
import { PharmacySection } from './sections/PharmacySection';
import { DeploymentSection } from './sections/DeploymentSection';
import { EnvironmentSection } from './sections/EnvironmentSection';
import { MissionImpactSection } from './sections/MissionImpactSection';
import { VisionSection } from './sections/VisionSection';
import { ProposalFooterSection } from './sections/ProposalFooterSection';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();
  useScrollReveal();

  useEffect(() => {
    document.documentElement.style.setProperty('--connection-progress', '0');
  }, []);

  return (
    <div className="min-h-screen bg-bd-dark text-bd-text">
      <Navigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <ArchitectureSection />
        <GenomicsSection />
        <PharmacySection />
        <DeploymentSection />
        <EnvironmentSection />
        <MissionImpactSection />
        <VisionSection />
      </main>
      <ProposalFooterSection />
    </div>
  );
}

export default App;
