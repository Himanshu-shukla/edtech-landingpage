import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkshopLanding from './components/WorkshopLanding.jsx'
import CareerWarningSection from './components/CareerWarningSection.jsx'
import AlumniSection from './components/AlumniSection.jsx'
import WhyAgenticAI from './components/WhyAgenticAI.jsx'
import CurriculumSection from './components/CurriculumCard.jsx'
import TargetAudienceSection from './components/TargetAudienceSection.jsx'
import BonusSection from './components/BonusSection.jsx'
import ComparisonSection from './components/ComparisonSection.jsx'
import IndustryGrowthSection from './components/IndustryGrowthSection.jsx'
import TestimonialSection from './components/TestimonialSection.jsx'
import InstructorSection from './components/InstructorSection.jsx'
import IrreplaceableSkillsSection from './components/IrreplaceableSkillsSection.jsx'
import FAQSection from './components/FAQSection.jsx'
import FoundryHero from './components/FoundryHero.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <FoundryHero/>
      <WorkshopLanding />
      <CareerWarningSection />
      <AlumniSection />
      <WhyAgenticAI />
      <CurriculumSection />
      <TargetAudienceSection />
      <BonusSection />
      <ComparisonSection />
      <IndustryGrowthSection />
      <TestimonialSection />
      {/* <InstructorSection /> */}
      <IrreplaceableSkillsSection />
      <FAQSection />
    </>
  )
}

export default App
