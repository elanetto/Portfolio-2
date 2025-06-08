import HomeHero from "./components/HomeHero";
import InfoCards from "./components/InfoCards";
import ProductList from "./components/ProductList";
import CVTimeline from "./components/CV/CVTimeline";
import EducationTimeline from "./components/CV/EducationTimeline";
import ContactCTA from "./components/ContactCTA";

function App() {
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
