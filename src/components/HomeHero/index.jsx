import { useEffect, useState } from "react";
import headerImage from "./../../assets/images/anette_hero_wide.jpg";
import mobileHeaderImage from "./../../assets/images/anette_hero.jpg";

function HomeHero() {
  const [bgImage, setBgImage] = useState(headerImage);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      setBgImage(isNowMobile ? mobileHeaderImage : headerImage);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div className="px-4 md:px-6 mt-2">
      <div
        className="max-w-[1200px] h-[300px] md:h-[350px] mx-auto rounded-xl shadow-lg bg-cover bg-no-repeat bg-center flex items-center justify-between overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: isMobile ? "30% center" : "right 20% center",
        }}
      >
        <div className="h-full flex items-center">
          <div className="text-white px-4 md:px-12 max-w-[550px] text-left">
            <h2 className="text-2xl md:text-5xl font-bold text-shadow leading-tight">
              {isMobile ? (
                <>
                  Anette<br />
                  Therese
                </>
              ) : (
                "Anette Therese"
              )}
            </h2>
            <p className="text-xl md:text-3xl text-shadow mt-2">
              {isMobile ? (
                <>
                  Koding<br />
                  Kommunikasjon<br />
                  & Design
                </>
              ) : (
                "Koding, Kommunikasjon & Design"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
