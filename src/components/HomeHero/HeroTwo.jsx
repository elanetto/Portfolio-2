import { useEffect, useState } from "react";
import headerImage from "./../../assets/images/anette_hero_wide.jpg";

function HomeHeroTwo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="min-h-[450px] flex flex-col justify-center items-center text-white text-center px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(108, 118, 74, 0), rgba(32, 19, 9, 0)), url(${headerImage})`,
      }}
    >
      <div className="h-full flex items-center lg:pl-6 container">
        <div className="text-white px-4 md:px-12 max-w-[550px] text-left">
          <h1
            id="hero-heading"
            className="text-5xl pl-5 md:pl-0 font-bold text-shadow leading-tight"
          >
            {isMobile ? (
              <>
                Anette
                <br />
                Therese
              </>
            ) : (
              "Anette Therese"
            )}
          </h1>
          <p className="text-2xl pl-5 md:pl-0 md:text-3xl text-shadow mt-2">
            {isMobile ? (
              <>
                Koding
                <br />
                Kommunikasjon
                <br />& Design
              </>
            ) : (
              "Koding, Kommunikasjon & Design"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroTwo;
