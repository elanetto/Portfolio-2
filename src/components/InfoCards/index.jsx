import { MdLooks5, MdLooks6 } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import backgroundImage1 from "../../assets/images/anette-goldsmiths-wow.jpg";
import backgroundImage2 from "../../assets/images/anette-goldsmiths-wow-2.jpg";
import backgroundImage3 from "../../assets/images/school-projects-hero.jpg";

function InfoCards() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const baseStyle = (bg) => ({
    backgroundImage: `linear-gradient(to bottom right, rgba(108, 118, 74, 0.85), rgba(32, 19, 9, 0.85)), url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  return (
    <div className="flex flex-wrap justify-between max-w-[1200px] mx-auto mt-8 px-4 md:px-0 space-y-4 md:space-y-0">
      {/* Card 1 */}
      <div
        onClick={() => scrollToSection("cv")}
        className="text-white p-2 rounded-2xl flex w-full lg:w-[370px] transform transition-transform duration-300 hover:scale-105 shadow-lg mx-auto"
        style={baseStyle(backgroundImage1)}
      >
        <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
          <MdLooks5 className="text-7xl text-white" />
        </div>
        <div className="flex items-center text-sm p-2">
          <p>
            5 års erfaring innen{" "}
            <span className="font-bold text-white">Digital Markedsføring</span>,
            Art Direction og Grafisk Design: Sosiale medier, foto, innhold til nettsider, logo, og mer.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        onClick={() => scrollToSection("cv")}
        className="text-white p-2 rounded-2xl flex w-full lg:w-[370px] transform transition-transform duration-300 hover:scale-105 shadow-lg mx-auto"
        style={baseStyle(backgroundImage2)}
      >
        <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
          <MdLooks6 className="text-7xl text-white" />
        </div>
        <div className="flex items-center text-sm p-2 md:py-0">
          <p>
            6 års erfaring som{" "}
            <span className="font-bold text-white">lektor</span> i medier, både som høyskolelektor, ungdomsskolelærer, trinnkoordinator og
            IKT-ansvarlig.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        onClick={() => scrollToSection("education")}
        className="text-white p-2 rounded-2xl flex w-full lg:w-[370px] transform transition-transform duration-300 hover:scale-105 shadow-lg mx-auto"
        style={baseStyle(backgroundImage3)}
      >
        <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
          <FaGraduationCap className="text-7xl text-white" />
        </div>
        <div className="flex items-center text-sm p-2 md:py-0">
          <p>
            Master i{" "}
            <span className="font-bold text-white">Digitale Medier</span>,
            Bachelor i Reklame og Kommunikasjon, 2-årig utdanning som{" "}
            <span className="font-bold text-white">FrontEnd Developer</span> og
            årsstudier i Engelsk og PPU.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
