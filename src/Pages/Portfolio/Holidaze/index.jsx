import PortfolioLayout from "./../../../Layout/PortfolioLayout";
import HolidazeImg1 from "./../../../assets/portfolio/card/Holidaze-1.jpg";
import HolidazeImg2 from "./../../../assets/portfolio/card/Holidaze-2.jpg";
import HolidazeImg3 from "./../../../assets/portfolio/card/Holidaze-3.jpg";
import TechIcons from "./../../../components/Icons/TechIcons";

function Holidaze() {
  return (
    <PortfolioLayout
      title="Holidaze"
      description={`
        Holidaze er et feriebookingsnettsted utviklet som eksamensprosjekt på andre året av Frontend-utdanningen ved Noroff. 
        Målet med prosjektet var å bruke en gitt API til å utvikle en funksjonell applikasjon hvor brukere kan søke etter, filtrere og booke feriesteder – og hvor venue managers kan opprette og administrere sine egne overnattingssteder.
        `}
      reflections={`
        Denne oppgaven har åpnet øynene mine mer for alle mulighetene React har å by på. 

        Jeg lærte blant annet hvordan man kan bruke en Rich Text Editor for å la brukere redigere tekstinnhold, og hvordan man kan bruke Fuse.js for å gjøre søkefunksjonen mer tilgivende – slik at den tåler og forstår brukerens skrivefeil.

        Forbedringspotensiale i dette prosjektet er å bruke kartene som skal vise hvor feriestedene er på en bedre måte. Det burde også ikke være mulig å booke et feriested før man har lagt inn betalingsmetode.
        `}
      images={[HolidazeImg1, HolidazeImg2, HolidazeImg3]}
      icons={[
        TechIcons.github,
        TechIcons.vite,
        TechIcons.react,
        TechIcons.javascript,
        TechIcons.tailwind,
        TechIcons.html5,
        TechIcons.figma,
      ]}
      liveLink="https://dev-holiday.onrender.com/"
      githubLink="https://github.com/elanetto/Holiday"
    />
  );
}

export default Holidaze;
