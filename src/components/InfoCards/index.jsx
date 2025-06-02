import { MdLooks5, MdLooks6 } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

function InfoCards() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between mt-8 gap-4">
      {/* Card 1 */}
      <div className="bg-light-green hover:bg-leaf-green text-dark-green hover:text-black p-4 rounded-2xl flex w-full md:w-[470px] transform transition-transform duration-300 hover:scale-110">
        <div className="w-24 h-24 flex items-center justify-center md:pt-5">
          <MdLooks5 className="text-8xl text-dark-green" />
        </div>
        <div className="px-6 py-3">
          <p>
            5 års erfaring innen{" "}
            <span className="font-bold">Digital Markedsføring</span>, Art
            Directio og Grafisk Design. Har jobbet med sosiale medier, photo og
            å lage content for nettsider.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-light-green hover:bg-leaf-green text-dark-green hover:text-black p-4 rounded-2xl flex w-full md:w-[470px] transform transition-transform duration-300 hover:scale-110">
        <div className="w-24 h-24 flex items-center justify-center md:pt-5">
          <MdLooks6 className="text-8xl text-dark-green" />
        </div>
        <div className="px-6 py-3">
          <p>
            6 års erfaring som <span className="font-bold">lektor</span>, både
            som Høyskolelektor innen medier, og kontaktlærer, trinnkoordinatior
            og IKT ansvarlig på ungsomsskolen
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-light-green hover:bg-leaf-green text-dark-green hover:text-black p-4 rounded-2xl flex w-full md:w-[470px] transform transition-transform duration-300 hover:scale-110">
        <div className="w-24 h-24 flex items-center justify-center md:pt-5">
          <FaGraduationCap className="text-8xl text-center text-dark-green" />
        </div>
        <div className="px-6 py-3">
          <p>
            Master i <span className="font-bold">Digitale Medier</span>, Bachelor i Reklame og Kommunikkajson, 2-åring utanning som{" "}
            <span className="font-bold">FrontEnd Developer</span> og årsstudier i Engelsk og PPU.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
