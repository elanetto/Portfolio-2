import ProductCard from "./../ProductCard";
import TechIcons from "./../Icons/TechIcons";
import HolidazeImg from "../../assets/portfolio/card/Holidaze-1.jpg";
import HolidazeHover from "../../assets/portfolio/card/Holidaze-hover-video.mp4";
import AuctionHouseImg from "../../assets/portfolio/card/AuctionHouse-1.jpg";
import AuctionHouseHover from "../../assets/portfolio/card/AuctionHouseVideo-hover.mp4";
import eShopImg from "../../assets/portfolio/card/eshop-1.jpg";
import eShopHover from "../../assets/portfolio/card/eShop-video-hover.mp4";

const holidazeText = 
    "En booking nettide: Søk, book eller legg ut dine egne venues. Skoleoppgave i Frontendutvikling på Noroff. Nettsiden bruker en API.";

const auctionHouseText = 
    "En auksjonsnettside hvor man kan søke, by på og delta på auksjoner. Man kan også legge ut egne produkter. API fra Noroff. Skoleoppgave.";

const eShopText =
    "En enkel e-handelsnettsted hvor man kan søke etter produkter og kjøpe dem. Skoleoppgave med en gitt API fra Noroff.";

function ProductList() {
  return (
    <>
      <h2 className="text-3xl font-bold text-dark-green w-full text-center mt-12 py-4">
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
            TechIcons.react,
            TechIcons.javascript,
            TechIcons.tailwind,
            TechIcons.html5,
          ]}
        />
        <ProductCard
          title="eShop"
          description={eShopText}
          image={eShopImg}
          hoverImage={eShopHover}
          link="/eshop"
          icons={[TechIcons.html5, TechIcons.javascript, TechIcons.tailwind]}
        />
      </div>
    </>
  );
}

export default ProductList;
