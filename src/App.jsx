import { useEffect } from "react";
import HomeHeroTwo from "./components/HomeHero/HeroTwo.jsx";
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
    <>
      <div className="min-h-screen w-full mx-auto">
        <HomeHeroTwo />
        <InfoCards />
        <ProductList />
        <ContactCTA />
        <EducationTimeline />
        <CVTimeline />
      </div>
    </>
  );
}

export default App;
