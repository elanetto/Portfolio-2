import backgroundImage from "../../assets/images/anette-goldsmiths-wow.jpg";

export default function CVTimeline() {
  const experiences = [
    {
      year: "2018 - 2023",
      title: "BAKKELØKKA UNGDOMSSKOLE",
      role: "Lærer og IKT-ansvarlig",
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
      role: "Høyskolelektor og studieansvarlig",
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
      className="relative text-white py-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(108, 118, 74, 0.9), rgba(32, 19, 9, 0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-18 md:px-4">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold mb-16 tracking-widest text-creamy">
          03 ERFARING
        </h2>

        {/* Timeline Container */}
        <div className="relative md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-1 md:before:bg-green-500">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-16`}
            >
              {/* Desktop: Left side */}
              {index % 2 === 0 ? (
                <>
                  {/* Content Left (or full width on mobile) */}
                  <div className="w-full md:w-1/2 pr-0 md:pr-8 text-left md:text-right">
                    <p className="text-green-400 font-bold text-sm">
                      {exp.year}
                    </p>
                    <h3 className="text-xl font-bold uppercase">{exp.title}</h3>
                    <p className="font-semibold text-creamy">{exp.role}</p>
                    <p className="text-creamy/90 mt-2 max-w-md ml-0 md:ml-auto">
                      {exp.description}
                    </p>
                  </div>

                  {/* Dot (hidden on mobile) */}
                  <div className="hidden md:flex relative z-10 w-10 left-0.5 bottom-18 justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Empty Right */}
                  <div className="hidden md:block w-full md:w-1/2" />
                </>
              ) : (
                <>
                  {/* Empty Left */}
                  <div className="hidden md:block w-full md:w-1/2" />

                  {/* Dot (hidden on mobile) */}
                  <div className="hidden md:flex relative z-10 w-10 left-0.5 bottom-16 justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Content Right (or full width on mobile) */}
                  <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left">
                    <p className="text-green-400 font-bold text-sm">
                      {exp.year}
                    </p>
                    <h3 className="text-xl font-bold uppercase">{exp.title}</h3>
                    <p className="font-semibold text-creamy">{exp.role}</p>
                    <p className="text-creamy/90 mt-2 max-w-md">
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
