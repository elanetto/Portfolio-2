import PortfolioLayout from "./../../../Layout/PortfolioLayout";
import eShopImg1 from "./../../../assets/portfolio/card/eShop-1.jpg";
import eShopImg2 from "./../../../assets/portfolio/card/eShop-2.jpg";
import eShopImg3 from "./../../../assets/portfolio/card/eShop-3.jpg";
import TechIcons from "./../../../components/Icons/TechIcons";

function Nettbutikk() {
  return (
    <PortfolioLayout
      title="eShop"
      description="Dette prosjektet er en fiktiv nettbutikk utviklet med React, Vite, Tailwind og vanilla JavaScript, basert på en gitt API med 25 produkter. Oppgaven gikk ut på å sette opp en fullverdig frontend-løsning med handlekurv og valideringslogikk."
      reflections="Dette prosjektet er det første react prosjektet jeg har gjort med en gitt API."
      images={[eShopImg1, eShopImg2, eShopImg3]}
      icons={[
        TechIcons.react,
        TechIcons.tailwind,
        TechIcons.javascript,
        TechIcons.vite,
        TechIcons.html5,
        TechIcons.github,
      ]}
      liveLink="https://online-shop-ca-anette.netlify.app/"
      githubLink="https://github.com/elanetto/online-shop-CA"
    ></PortfolioLayout>
  );
}

export default Nettbutikk;
