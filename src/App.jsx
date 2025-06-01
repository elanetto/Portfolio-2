import { useEffect, useState } from 'react';
import headerImage from './../src/assets/images/anette_hero_wide.jpg';
import mobileHeaderImage from './../src/assets/images/anette_hero.jpg';

function App() {
  const [bgImage, setBgImage] = useState(headerImage);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      setBgImage(isNowMobile ? mobileHeaderImage : headerImage);
    };

    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  return (
    <div className="min-h-screen w-full container mx-auto">
      <div
        className="h-[500px] w-full text-white bg-pink-900/30 p-4 rounded-xl shadow-lg bg-cover flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: isMobile ? '5% center' : 'center',
        }}
      >
        <div className={`w-full p-8 md:p-24 text-left max-w-[800px]`}>
          <h2 className="text-4xl md:text-6xl font-bold text-shadow">FrontEnd Developer</h2>
          <p className="text-2xl md:text-4xl text-shadow">Anette Therese Lindberg</p>
        </div>
      </div>
    </div>
  );
}

export default App;
