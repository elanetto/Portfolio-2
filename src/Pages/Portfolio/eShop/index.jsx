import PortfolioLayout from "./../../../Layout/PortfolioLayout";
import eShopImg1 from "./../../../assets/portfolio/card/new-eShop-1.jpg";
import eShopImg2 from "./../../../assets/portfolio/card/new-eShop-2.jpg";
import eShopImg3 from "./../../../assets/portfolio/card/new-eShop-3.jpg";
import TechIcons from "./../../../components/Icons/TechIcons";

function Nettbutikk() {
  return (
    <PortfolioLayout
      title="eShop"
      description={`
        
        Dette prosjektet er en fiktiv nettbutikk utviklet med React, Vite, Tailwind og vanilla JavaScript, basert på en gitt API med 25 produkter. Oppgaven gikk ut på å sette opp en fullverdig frontend-løsning med handlekurv og valideringslogikk.
        
        `}
      reflections={`

        Dette prosjektet var mitt første React-prosjekt bygget med et gitt API. Hovedfokuset var å få selve funksjonaliteten på plass – spesielt søkefunksjon og kjøpsflyt for de 25 tilgjengelige produktene. Underveis lærte jeg mye om komponentbasert utvikling, state management og hvordan man kan strukturere logikk og brukergrensesnitt i React.

Designet er senere oppdatert med et mer moderne og stilrent uttrykk. Den opprinnelige blåfargen (som er like forhatt innen webdesign som fonten Comic Sans er i grafisk design) ble byttet ut med en mer gjennomtenkt fargepalett. Det nye designet legger større vekt på produktbildene, og brukerne har nå mulighet til å klikke på bildene for å vise dem i større format – i tråd med dagens designstandarder.
        
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
