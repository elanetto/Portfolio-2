import PortfolioLayout from "./../../../Layout/PortfolioLayout";
import AuctionHouseImg1 from "./../../../assets/portfolio/card/AuctionHouse-1.jpg";
import AuctionHouseImg2 from "./../../../assets/portfolio/card/AuctionHouse-2.jpg";
import AuctionHouseImg3 from "./../../../assets/portfolio/card/AuctionHouse-3.jpg";
import AuctionHouseImg4 from "./../../../assets/portfolio/card/AuctionHouse-4.jpg";
import TechIcons from "./../../../components/Icons/TechIcons";

function AuctionHouse() {
  return (
    <PortfolioLayout
      title="Auction House"
      description="Auction House er et auksjonsnettsted utviklet som mitt semesterprosjekt, laget første halvdel av mitt andre år av Frontend-utdanningen min ved Noroff. Målet var å bygge en fullverdig nettapplikasjon hvor brukere kan opprette, by på og administrere auksjoner – kun ved bruk av HTML, JavaScript, og en valgt CSS-rammeverk. Jeg valgte å bruke Tailwind CSS og Vite for å optimalisere utviklingsflyten."
      reflections="Når jeg ser over denne oppgaven bare et halvt år senere, så har jeg vokst så mye som utvikler at jeg ser flere muligheter for å løfte dette til et mye bedre prosjekt. Spesielt med bruk av React."
      images={[
        AuctionHouseImg1,
        AuctionHouseImg2,
        AuctionHouseImg3,
        AuctionHouseImg4,
      ]}
      icons={[
        TechIcons.tailwind,
        TechIcons.javascript,
        TechIcons.vite,
        TechIcons.html5,
        TechIcons.github,
      ]}
      liveLink="https://regal-travesseiro-0cbb67.netlify.app/"
      githubLink="https://github.com/elanetto/auction-semester-project"
    ></PortfolioLayout>
  );
}

export default AuctionHouse;
