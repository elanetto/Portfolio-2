import PortfolioLayout from "./../../../Layout/PortfolioLayout";
import AuctionHouseImg1 from "./../../../assets/portfolio/card/new-AuctionHouse-1.jpg";
import AuctionHouseImg2 from "./../../../assets/portfolio/card/new-AuctionHouse-2.jpg";
import AuctionHouseImg3 from "./../../../assets/portfolio/card/new-AuctionHouse-3.jpg";
import AuctionHouseImg4 from "./../../../assets/portfolio/card/AuctionHouse-4.jpg";
import TechIcons from "./../../../components/Icons/TechIcons";

function AuctionHouse() {
  return (
    <PortfolioLayout
      title="Auction House"
      description={`Auction House er et auksjonsnettsted utviklet som mitt semesterprosjekt, laget første halvdel av mitt andre år av Frontend-utdanningen min ved Noroff.

    Målet var å bygge en fullverdig nettapplikasjon hvor brukere kan opprette, by på og administrere auksjoner – kun ved bruk av HTML, JavaScript, og en valgt CSS-rammeverk. Jeg valgte å bruke Tailwind CSS og Vite for å optimalisere utviklingsflyten.
    
    `}
      reflections={`Da dette prosjektet først ble satt sammen, klarte jeg å krasje hele Noroffs API med måten det ble brukt på. I etterkant har jeg gått inn i koden og rettet opp både paginering, søkefunksjon og "Hottest item"-komponenten, slik at produktene nå hentes inn på riktig måte.

Prosjektet kunne blitt enda bedre – og fått flere muligheter – dersom det hadde blitt bygget med komponenter i React. Da kunne jeg også benyttet meg av mer av det jeg liker aller best med React: NPM-økosystemet. Ferdige komponenter som Rich Text Editor, Toastify og Carousel gjør det både morsommere og mer effektivt å utvikle.

Jeg har lært mye av å jobbe med dette prosjektet – både om hva man bør gjøre, og hva man bør unngå.

      `}
      images={[
        AuctionHouseImg1,
        AuctionHouseImg2,
        AuctionHouseImg3,
        AuctionHouseImg4,
      ]}
      icons={[
        TechIcons.github,
        TechIcons.vite,
        TechIcons.javascript,
        TechIcons.tailwind,
        TechIcons.html5,
        TechIcons.figma,
      ]}
      liveLink="https://regal-travesseiro-0cbb67.netlify.app/"
      githubLink="https://github.com/elanetto/auction-semester-project"
    />
  );
}

export default AuctionHouse;
