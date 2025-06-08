import { MdLooks5, MdLooks6 } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import InfoCard from "./InfoCard";
import backgroundImage1 from "../../assets/images/anette-goldsmiths-wow.jpg";
import backgroundImage2 from "../../assets/images/anette-goldsmiths-wow-2.jpg";
import backgroundImage3 from "../../assets/images/school-projects-hero.jpg";

const cards = [
  {
    icon: MdLooks5,
    text: `5 års erfaring innen Art Direction, Digital Markedsføring og Grafisk Design: Sosiale medier, foto, innhold til nettsider, logo, med mer.`,
    bgImage: backgroundImage1,
    scrollId: "cv",
    ariaLabel: "Scroll to CV section for marketing experience",
  },
  {
    icon: MdLooks6,
    text: `6 års erfaring som lektor i medier, både som høyskolelektor, ungdomsskolelærer, trinnkoordinator og IKT-ansvarlig.`,
    bgImage: backgroundImage2,
    scrollId: "cv",
    ariaLabel: "Scroll to CV section for teaching experience",
  },
  {
    icon: FaGraduationCap,
    text: `Master i Digitale Medier, Bachelor i Reklame og Kommunikasjon, 2-årig utdanning som FrontEnd Developer og årsstudier i Engelsk og PPU.`,
    bgImage: backgroundImage3,
    scrollId: "education",
    ariaLabel: "Scroll to Education section",
  },
];

function InfoCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mt-8 px-4">
      {cards.map((card) => (
        <InfoCard key={`${card.scrollId}-${card.ariaLabel}`} {...card} />
      ))}
    </div>
  );
}

export default InfoCards;
