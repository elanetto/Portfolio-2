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
    <div
      className="h-[400px] text-white bg-pink-900/30 p-4 rounded-xl shadow-lg bg-cover flex m-2 items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: isMobile ? "30% center" : "center",
      }}
    >
      <div className="pl-1 md:p-24 text-left max-w-[800px]">
        <h2 className="text-3xl md:text-6xl font-bold text-shadow">
          {isMobile ? (
            <>
              FrontEnd<br />
              Developer
            </>
          ) : (
            "FrontEnd Developer"
          )}
        </h2>
        <p className="text-2xl md:text-4xl text-shadow">
          {isMobile ? (
            <>
              Anette<br />
              Therese<br />
              Lindberg
            </>
          ) : (
            "Anette Therese Lindberg"
          )}
        </p>
      </div>
    </div>
  );
}

export default HomeHero;
