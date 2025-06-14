// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import HeaderSection from "./components/header/HeaderSection";
import DestinationSection from "./components/destinations/DestinationSection";
import AdvantageSection from "./components/advantages/AdvantageSection";
import TourPackageSection from "./components/tour-packages/TourPackageSection";
import TestimonialSection from "./components/testimonials/TestimonialSection";

function App() {
  return (
    <>
      <HeaderSection />
      <DestinationSection/>
      <AdvantageSection/>
      <TourPackageSection/>
      <TestimonialSection/>
    </>
  );
}

export default App;
