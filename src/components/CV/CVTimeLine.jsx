// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backgroundImage from "../../assets/images/anette-goldsmiths-wow.jpg";

export default function CVTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      year: "2018 - 2023",
      title: "BAKKELØKKA UNGDOMSSKOLE",
      role: "Lektor, Trinnkoordinator, Kontaktlærer og IKT-ansvarlig",
      description:
        "Lærer i Medier og Engelsk. IKT-ansvarlig for hele skolen. Lærer elevene å formidle valgte budskap gjennom gode tekster, design, video og bilder.",
    },
    {
      year: "2016 - 2017",
      title: "BIG PICTURE",
      role: "Digital Markedsfører og Art Director",
      description:
        "Reklamebyrå i Bodø. Jobbet direkte med kunder og lagde reklamekampanjer, videoer og bilder for sosiale medier. Bygde nettsider, brosjyrer og plakater.",
    },
    {
      year: "2014 - 2015",
      title: "HØYSKOLEN I NESNA",
      role: "Høyskolelektor og Studieansvarlig",
      description:
        "Jobbet som studieansvarlig for årsstudiet Digitale Medier ved Campus Helgeland. Var lærer i dagene Idéutvikling, Grafisk Design, Foto og Sosiale Medier.",
    },
    {
      year: "2013 - 2014",
      title: "GULLSMEDGRUPPEN AS",
      role: "Digital Markedsfører",
      description:
        "Styrte de to nettbutikkene Gullfunn og Juvelen, samt drev deres medlemsklubber og all aktivitet på sosiale medier fra begge butikkene. Jobbet med SEO, og analyserte hva som fungerte på nett. Lagde kinoreklame, adshell, rollups, email marketing, plakater og en rekke annet grafisk materiale.",
    },
    {
      year: "2012 - 2013",
      title: "CEN8",
      role: "Kommunikasjonskonsulent",
      description:
        "Frivillig arbeid på siden av master-studiet. Veiledet ledelsen innen kommunikasjon og bruk av sosiale medier. Lagde også materiale i form av nettside, brosjyrer, kalender, rollup, video og blogg.",
    },
    {
      year: "2011 - 2012",
      title: "HJERNESTORM",
      role: "Grafisk designer",
      description:
        "Jobbet som del av et kreativt team og bygde grafisk materiale i form av: kampanjer, magasin, brosjyrer, grafiske profiler, infografer, DM, banner ads, facebook page design, nettsider og annonser.",
    },
    {
      year: "2011",
      title: "PERSONELLSERVICE TRØNDELAG",
      role: "Grafisk designer",
      description:
        "I tillegg til å gjøre research og konseptutvikling for markedsføringen av to nye produkter, bygget jeg grafisk materiale i form av brosjyrer, plakater, intranet reklame og email marketing.",
    },
  ];

  return (
    <section
      id="cv"
      className="relative text-white py-20 max-w-[1200px] mx-auto"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(108, 118, 74, 0.9), rgba(32, 19, 9, 0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "45% center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-18 md:px-4">
        <h2 className="text-center text-2xl font-bold mb-16 tracking-widest text-white">
          ERFARING
        </h2>

        <div ref={ref} className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-1/2 top-0 w-1 bg-green-500 hidden md:block"
            style={{ transform: "translateX(-50%)" }}
          />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center mb-16"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-full md:w-1/2 pr-0 md:pr-8 text-left md:text-right">
                    <p className="text-green-400 font-bold text-sm">
                      {exp.year}
                    </p>
                    <h3 className="text-xl font-bold uppercase">{exp.title}</h3>
                    <p className="font-semibold text-white">{exp.role}</p>
                    <p className="text-white mt-2 max-w-md ml-0 md:ml-auto text-sm">
                      {exp.description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="hidden md:flex relative z-10 w-10 bottom-18 justify-center"
                  >
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                  </motion.div>

                  <div className="hidden md:block w-full md:w-1/2" />
                </>
              ) : (
                <>
                  <div className="hidden md:block w-full md:w-1/2" />

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="hidden md:flex relative z-10 w-10 bottom-16 justify-center"
                  >
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                  </motion.div>

                  <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left">
                    <p className="text-green-400 font-bold text-sm">
                      {exp.year}
                    </p>
                    <h3 className="text-xl font-bold uppercase">{exp.title}</h3>
                    <p className="font-semibold text-white">{exp.role}</p>
                    <p className="text-white mt-2 max-w-md text-sm">
                      {exp.description}
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
