import { useEffect } from "react";
import HomeHero from "./components/HomeHero";
import InfoCards from "./components/InfoCards";
import ProductList from "./components/ProductList";
import CVTimeline from "./components/CV/TimelineCV.jsx";
import EducationTimeline from "./components/CV/EducationTimeline";
import ContactCTA from "./components/ContactCTA";
import { scrollToHash } from "./utils/scrollToHash";
import { useScrollTarget } from "./context/useScrollTarget";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Anette Therese - FrontEnd Developer Portfolio</title>
        <meta
          name="description"
          content="Anette Therese Lindberg er en FrontEnd Developer som har sin styrke i grafisk design, WAP og React. Se hennes portfolio."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/elanetto/Portfolio-2/refs/heads/main/src/assets/images/meta-portfolio-anette.jpg"
        />
        <meta
          property="og:title"
          content="Anette Therese - FrontEnd Developer"
        />
        <meta
          property="og:description"
          content="Koding, Kommunikasjon & Design"
        />
        <meta
          property="og:url"
          content="https://anette-portfolio.onrender.com"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen w-full container mx-auto">
        <HomeHero />
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
