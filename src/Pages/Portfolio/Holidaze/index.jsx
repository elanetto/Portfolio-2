import PortfolioLayout from "./../../../Layout/PortfolioLayout";
import HolidazeImg1 from "./../../../assets/portfolio/card/Holidaze-1.jpg";
import HolidazeImg2 from "./../../../assets/portfolio/card/Holidaze-2.jpg";
import HolidazeImg3 from "./../../../assets/portfolio/card/Holidaze-3.jpg";
import TechIcons from "./../../../components/Icons/TechIcons";

function Holidaze() {
  return (
    <PortfolioLayout
      title="Holidaze"
      description="Holidaze er et feriebookingsnettsted utviklet som eksamensprosjekt på andre året av Frontend-utdanningen ved Noroff. Målet med prosjektet var å bruke en gitt API til å utvikle en funksjonell applikasjon hvor brukere kan søke etter, filtrere og booke feriesteder – og hvor venue managers kan opprette og administrere sine egne overnattingssteder."
      reflections="Denne oppgaven har åpnet øynene mine mer for alle mulighetene React har å by på, som å installere og bruke Rich Text Editor for å kunne la brukeren lett redigere sine tekster, eller hvordan man kan bruke Fuse.js for å gjøre søke-funksjonen mindre streng - slik at den tåler det og forstår det om brukeren staver noe feil."
      images={[HolidazeImg1, HolidazeImg2, HolidazeImg3]}
      icons={[
        TechIcons.react,
        TechIcons.tailwind,
        TechIcons.javascript,
        TechIcons.vite,
        TechIcons.html5,
        TechIcons.github,
      ]}
      liveLink="https://dev-holiday.onrender.com/"
      githubLink="https://github.com/elanetto/Holiday"
    ></PortfolioLayout>
  );
}

export default Holidaze;

