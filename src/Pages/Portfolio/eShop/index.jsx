import PortfolioLayout from "./../../../Layout/PortfolioLayout";
import eShopImg1 from "./../../../assets/portfolio/card/eShop-1.jpg";
import eShopImg2 from "./../../../assets/portfolio/card/eShop-2.jpg";
import eShopImg3 from "./../../../assets/portfolio/card/eShop-3.jpg";
import TechIcons from "./../../../components/Icons/TechIcons";

function Nettbutikk() {
  return (
    <PortfolioLayout
      title="eShop"
      description={`
        
        Dette prosjektet er en fiktiv nettbutikk utviklet med React, Vite, Tailwind og vanilla JavaScript, basert på en gitt API med 25 produkter. Oppgaven gikk ut på å sette opp en fullverdig frontend-løsning med handlekurv og valideringslogikk.
        
        `}
      reflections={`
        
        Dette prosjektet er det første React-prosjektet jeg har gjort med en gitt API. Det viktigste med dette prosjektet var å få koden til å fungere: Altså at nettsiden skulle fungere i forhold til søking og kjøping av de 25 tilgjengelige produktene.

        I ettertid er mitt største forbedringspotensial i dette prosjektet designen av nettsiden. Blåfargen får siden til å se halvferdig ut.
        
        `}
      images={[eShopImg1, eShopImg2, eShopImg3]}
      icons={[
        TechIcons.github,
        TechIcons.vite,
        TechIcons.react,
        TechIcons.javascript,
        TechIcons.tailwind,
        TechIcons.html5,
      ]}
      liveLink="https://online-shop-ca-anette.netlify.app/"
      githubLink="https://github.com/elanetto/online-shop-CA"
    ></PortfolioLayout>
  );
}

export default Nettbutikk;
