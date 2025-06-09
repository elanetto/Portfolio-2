import ProductCard from "./../ProductCard";
import TechIcons from "./../Icons/TechIcons";
import HolidazeImg from "../../assets/portfolio/card/Holidaze-1.jpg";
import HolidazeHover from "../../assets/portfolio/card/Holidaze-hover-video.mp4";
import AuctionHouseImg from "../../assets/portfolio/card/new-AuctionHouse-1.jpg";
import AuctionHouseHover from "../../assets/portfolio/card/new-AuctionHouseVideo-hover.mp4";
import eShopImg from "../../assets/portfolio/card/new-eShop-1.jpg";
import eShopHover from "../../assets/portfolio/card/new-eShop-video-hover.mp4";

const holidazeText =
  "En bookingside hvor du kan søke, booke eller publisere egne fritidssteder. Nettsiden inviterer til oppdagelse gjennom lekne farger og detaljer.";

const auctionHouseText =
  "Auction House er en responsiv auksjonsplattform hvor du kan søke, by og delta på auksjoner – eller legge ut dine egne produkter for salg. Opprett en bruker og bli med i budrunden!";

const eShopText =
  "Et e-handelsnettsted hvor du kan utforske produkter og legge dem i handlekurven. Løsningen har et brukervennlig og intuitivt kassesystem, og gir en sømløs opplevelse.";

function ProductList() {
  return (
    <>
      <h2
        className="text-3xl font-bold text-dark-green w-full text-center mt-12 py-4"
        id="portfolio"
      >
        FrontEnd Portfolio
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center mx-auto mt-4 mb-24 max-w-[1200px]">
        <ProductCard
          title="Holidaze"
          description={holidazeText}
          image={HolidazeImg}
          hoverImage={HolidazeHover}
          link="/holidaze"
          icons={[
            TechIcons.github,
            TechIcons.vite,
            TechIcons.react,
            TechIcons.javascript,
            TechIcons.tailwind,
            TechIcons.html5,
            TechIcons.figma,
          ]}
        />
        <ProductCard
          title="Auction House"
          description={auctionHouseText}
          image={AuctionHouseImg}
          hoverImage={AuctionHouseHover}
          link="/auction"
          icons={[
            TechIcons.github,
            TechIcons.vite,
            TechIcons.javascript,
            TechIcons.tailwind,
            TechIcons.html5,
            TechIcons.figma,
          ]}
        />
        <ProductCard
          title="eShop"
          description={eShopText}
          image={eShopImg}
          hoverImage={eShopHover}
          link="/eshop"
          icons={[
            TechIcons.github,
            TechIcons.vite,
            TechIcons.react,
            TechIcons.javascript,
            TechIcons.tailwind,
            TechIcons.html5,
          ]}
        />
      </div>
    </>
  );
}

export default ProductList;
