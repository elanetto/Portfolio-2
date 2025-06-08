import { useEffect } from "react";
import HomeHero from "./components/HomeHero";
import InfoCards from "./components/InfoCards";
import ProductList from "./components/ProductList";
import CVTimeline from "./components/CV/TimelineCV.jsx";
import EducationTimeline from "./components/CV/EducationTimeline";
import ContactCTA from "./components/ContactCTA";
import { scrollToHash } from "./utils/scrollToHash";
import { useScrollTarget } from "./context/useScrollTarget";

function App() {
  const { scrollTarget, setScrollTarget } = useScrollTarget();

  useEffect(() => {
    if (scrollTarget) {
      scrollToHash(scrollTarget);
      setScrollTarget(null);
    }
  }, [scrollTarget, setScrollTarget]);

  return (
    <div className="min-h-screen w-full container mx-auto">
      <HomeHero />
      <InfoCards />
      <ProductList />
      <ContactCTA />
      <EducationTimeline />
      <CVTimeline />
    </div>
  );
}

export default App;
