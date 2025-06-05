import { MdLooks5, MdLooks6 } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import backgroundImage1 from "../../assets/images/anette-goldsmiths-wow.jpg";
import backgroundImage2 from "../../assets/images/anette-goldsmiths-wow-2.jpg";
import backgroundImage3 from "../../assets/images/anette-goldsmiths-wow-3.jpg";

function InfoCards() {
  const baseStyle = (bg) => ({
    backgroundImage: `linear-gradient(to bottom right, rgba(108, 118, 74, 0.85), rgba(32, 19, 9, 0.85)), url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  return (
    <div className="flex flex-wrap justify-between max-w-[1200px] mx-auto mt-8 px-4 md:px-0 space-y-4 md:space-y-0">
      {/* Card 1 */}
      <div
        className="text-white p-2 rounded-2xl flex w-full lg:w-[370px] transform transition-transform duration-300 hover:scale-105 shadow-lg mx-auto"
        style={baseStyle(backgroundImage1)}
      >
        <div className="w-24 h-24 flex items-center justify-center md:pt-3 pt-7 p-2">
          <MdLooks5 className="text-7xl md:text-8xl text-white" />
        </div>
        <div className="flex items-center text-sm md:px-4 px-2 py-2 md:py-0">
          <p>
            5 års erfaring innen{" "}
            <span className="font-bold text-white">Digital Markedsføring</span>,
            Art Direction og Grafisk Design. Har jobbet med sosiale medier,
            foto, og å lage innhold for nettsider.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="text-white rounded-2xl flex w-full lg:w-[370px] transform transition-transform duration-300 hover:scale-105 shadow-lg mx-auto"
        style={baseStyle(backgroundImage2)}
      >
        <div className="w-24 h-24 flex items-center justify-center md:pt-5 pt-5 md:pl-4 pl-4">
          <MdLooks6 className="text-7xl md:text-8xl text-white" />
        </div>
        <div className="flex items-center text-sm px-4 py-2 md:py-0">
          <p>
            6 års erfaring som{" "}
            <span className="font-bold text-white">lektor</span>, både som
            Høyskolelektor innen medier, og kontaktlærer, trinnkoordinator og
            IKT ansvarlig på ungdomsskolen.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="text-white rounded-2xl flex w-full lg:w-[370px] transform transition-transform duration-300 hover:scale-105 shadow-lg mx-auto"
        style={baseStyle(backgroundImage3)}
      >
        <div className="w-24 h-24 flex items-center justify-center md:pt-6 pt-6 md:pl-5 pl-5">
          <FaGraduationCap className="text-7xl md:text-8xl text-white" />
        </div>
        <div className="flex items-center text-sm px-4 py-2 md:py-0">
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
