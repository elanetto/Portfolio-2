import { MdLooks5, MdLooks6 } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import backgroundImage1 from "../../assets/images/anette-goldsmiths-wow.jpg";
import backgroundImage3 from "../../assets/images/anette-goldsmiths-wow-2.jpg";
import backgroundImage2 from "../../assets/images/anette-goldsmiths-wow-3.jpg";

function InfoCards() {
  // Shared base style
  const baseStyle = (bg) => ({
    backgroundImage: `linear-gradient(to bottom right, rgba(108, 118, 74, 0.85), rgba(32, 19, 9, 0.85)), url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  return (
    <div className="flex flex-col md:flex-row md:justify-between mt-8 gap-4">
      {/* Card 1 */}
      <div
        className="text-white p-4 rounded-2xl flex w-full md:w-[470px] transform transition-transform duration-300 hover:scale-110 shadow-lg"
        style={baseStyle(backgroundImage1)}
      >
        <div className="w-24 h-24 flex items-center justify-center md:pt-5">
          <MdLooks5 className="text-8xl text-creamy" />
        </div>
        <div className="px-6 py-3">
          <p>
            5 års erfaring innen{" "}
            <span className="font-bold text-creamy">Digital Markedsføring</span>, Art
            Direction og Grafisk Design. Har jobbet med sosiale medier, foto, og
            å lage innhold for nettsider.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="text-white p-4 rounded-2xl flex w-full md:w-[470px] transform transition-transform duration-300 hover:scale-110 shadow-lg"
        style={baseStyle(backgroundImage2)}
      >
        <div className="w-24 h-24 flex items-center justify-center md:pt-5">
          <MdLooks6 className="text-8xl text-creamy" />
        </div>
        <div className="px-6 py-3">
          <p>
            6 års erfaring som{" "}
            <span className="font-bold text-creamy">lektor</span>, både som Høyskolelektor innen medier, og kontaktlærer, trinnkoordinator
            og IKT ansvarlig på ungdomsskolen.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="text-white p-4 rounded-2xl flex w-full md:w-[470px] transform transition-transform duration-300 hover:scale-110 shadow-lg"
        style={baseStyle(backgroundImage3)}
      >
        <div className="w-24 h-24 flex items-center justify-center md:pt-5">
          <FaGraduationCap className="text-8xl text-creamy" />
        </div>
        <div className="px-6 py-3">
          <p>
            Master i <span className="font-bold text-creamy">Digitale Medier</span>,
            Bachelor i Reklame og Kommunikasjon, 2-årig utdanning som{" "}
            <span className="font-bold text-creamy">FrontEnd Developer</span> og årsstudier
            i Engelsk og PPU.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
