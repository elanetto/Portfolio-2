// ProductList.jsx
import ProductCard from "./../ProductCard";
import TechIcons from "./../Icons/TechIcons";
import PlaceHolderImg from "../../assets/portfolio/card/placeholder_portfolio_card.png";
import PlaceHolderImgHover from "../../assets/portfolio/gif/frontend_notes_frontpage.gif";
import HolidazeImg from "../../assets/portfolio/card/Holidaze-1.jpg";
import HolidazeHover from "../../assets/portfolio/card/Holidaze-hover-video.mp4";
import AuctionHouseImg from "../../assets/portfolio/card/AuctionHouse-1.jpg";
import AuctionHouseHover from "../../assets/portfolio/card/AuctionHouseVideo-hover.mp4";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dolor vel nulla facilisis tristique. Praesent vehicula turpis nec.";

function ProductList() {
  return (
    <>
      <h2 className="text-3xl font-bold text-dark-green w-full text-center mt-12 py-4">
        FrontEnd Portfolio
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center mx-auto mt-4 mb-24 max-w-[1200px]">
        <ProductCard
          title="Holidaze"
          description={lorem}
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
          description={lorem}
          image={AuctionHouseImg}
          hoverImage={AuctionHouseHover}
          link="/auctionhouse"
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
          description={lorem}
          image={PlaceHolderImg}
          hoverImage={PlaceHolderImgHover}
          link="/auction"
          icons={[
            TechIcons.html5,
            TechIcons.javascript,
            TechIcons.tailwind,
          ]}
        />
      </div>
    </>
  );
}

export default ProductList;
