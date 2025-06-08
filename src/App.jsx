import HomeHero from "./components/HomeHero";
import InfoCards from "./components/InfoCards";
import ProductList from "./components/ProductList";
import CVTimeline from "./components/CV/CVTimeLine";
import EducationTimeline from "./components/CV/EducationTimeline";

function App() {
  return (
    <div className="min-h-screen w-full container mx-auto">
      <HomeHero />
      <InfoCards />
      <ProductList />
      <EducationTimeline />
      <CVTimeline />
    </div>
  );
}

export default App;
