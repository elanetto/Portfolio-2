// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backgroundImage from "../../assets/images/school-projects-hero.jpg";

export default function EducationTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      year: "2023 - 2025",
      title: "FRONT END DEVELOPMENT",
      role: "Noroff, Campus Oslo",
      description:
        "Nettsidedesign. Figma, HTML, CSS, JavaScript, Vite, React, TypeScript, SQL.",
    },
    {
      year: "2016 - 2017",
      title: "PRAKTISK PEDAGOGISK UTDANNING",
      role: "NTNU, Trondheim",
      description:
        "Pedagogikk, Engelsk didaktikk, Media didaktikk, 14 ukers praksis.",
    },
    {
      year: "2015 - 2016",
      title: "ENGELSK ÅRSSTUDIUM",
      role: "Universitetet i Nordland, Bodø",
      description:
        "English Linguistics, American literature, British Literature, Scientific and research writing.",
    },
    {
      year: "2012 - 2013",
      title: "MASTER I DIGITALE MEDIER",
      role: "Goldsmiths, University of London",
      description:
        "Hovedfag: Design and Processes for Innovation, Social Media Campaigning, Digital News Writing. etc.",
    },
    {
      year: "2009 - 2010",
      title: "BACHELOR WITH HONOURS IN ADVERTISING",
      role: "Southampton Solent University",
      description:
        "Advertising Design, Copywriting, Online Advertising, Creative Team, Agency Simulation.",
    },
    {
      year: "2007 - 2009",
      title: "REKLAME OG KOMMUNIKASJON",
      role: "Norges Kreative Fagskole, Trondheim",
      description:
        "Kommunikasjonsstrategi, Visuell kommunikasjon, Tekst, Design og Kreative metoder.",
    },
    {
      year: "2004 - 2007",
      title: "STUDIESPESIALISERENDE",
      role: "Moheia Videregående skole, Mo i Rana",
      description: "Oppnådde spesiell studiekompetanse.",
    },
  ];

  return (
    <section
      id="education"
      className="relative text-white py-20 max-w-[1200px] mx-auto"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(48, 102, 109, 0.9), rgba(32, 19, 9, 0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "80% center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-18 md:px-4">
        <h2 className="text-center text-2xl font-bold mb-16 tracking-widest text-white">
          UTDANNING
        </h2>

        <div ref={ref} className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-1/2 top-0 w-1 bg-green-500 hidden md:block"
            style={{ transform: "translateX(-50%)" }}
          />

          {education.map((edu, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center mb-16"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-full md:w-1/2 pr-0 md:pr-8 text-left md:text-right">
                    <p className="text-green-400 font-bold text-sm">
                      {edu.year}
                    </p>
                    <h3 className="text-xl font-bold uppercase">{edu.title}</h3>
                    <p className="font-semibold text-white">{edu.role}</p>
                    <p className="text-white mt-2 max-w-md ml-0 md:ml-auto text-sm">
                      {edu.description}
                    </p>
                  </div>

                  {/* DOT 1 */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="hidden md:flex relative z-10 w-10 bottom-14 justify-center"
                  >
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                  </motion.div>

                  <div className="hidden md:block w-full md:w-1/2" />
                </>
              ) : (
                <>
                  <div className="hidden md:block w-full md:w-1/2" />

                  {/* DOT 2 */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="hidden md:flex relative z-10 w-10 bottom-10 justify-center"
                  >
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                  </motion.div>

                  <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left">
                    <p className="text-green-400 font-bold text-sm">
                      {edu.year}
                    </p>
                    <h3 className="text-xl font-bold uppercase">{edu.title}</h3>
                    <p className="font-semibold text-white">{edu.role}</p>
                    <p className="text-white mt-2 max-w-md text-sm">
                      {edu.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
