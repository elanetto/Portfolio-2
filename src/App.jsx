import HomeHero from "./components/HomeHero";
import InfoCards from "./components/InfoCards";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen w-full container mx-auto">
      <HomeHero />
      <InfoCards />
      <ProductList />
    </div>
  );
}

export default App;
