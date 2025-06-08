import { useEffect, useState } from "react";
import headerImage from "./../../assets/images/anette_hero_wide.jpg";
import mobileHeaderImage from "./../../assets/images/anette_hero.jpg";

function HomeHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Run on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="px-4 md:px-6 mt-2" aria-labelledby="hero-heading">
      <div
        className="max-w-[1200px] h-[300px] md:h-[350px] mx-auto rounded-xl shadow-lg bg-cover bg-no-repeat bg-center flex items-center justify-between overflow-hidden"
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <picture className="absolute inset-0 w-full h-full object-cover z-[-1]">
          <source srcSet={headerImage} media="(min-width: 768px)" />
          <img
            src={mobileHeaderImage}
            alt="Anette Therese working at her desk"
            className="w-full h-full object-cover"
          />
        </picture>

        <div className="h-full flex items-center">
          <div className="text-white px-4 md:px-12 max-w-[550px] text-left">
            <h1
              id="hero-heading"
              className="text-3xl pl-5 md:pl-0 md:text-5xl font-bold text-shadow leading-tight"
            >
              Anette Therese
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
      </div>
    </section>
  );
}

export default HomeHero;
