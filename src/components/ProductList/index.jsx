// src/components/ProductList.jsx
import ProductCard from "./../ProductCard";
import PlaceHolderImg from "../../assets/portfolio/card/placeholder_portfolio_card.png";
import PlaceHolderImgHover from "../../assets/portfolio/gif/frontend_notes_frontpage.gif";

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
          image={PlaceHolderImg}
          hoverImage={PlaceHolderImgHover}
          link="/holidaze"
        />
        <ProductCard
          title="eShop"
          description={lorem}
          image={PlaceHolderImg}
          hoverImage={PlaceHolderImgHover}
          link="/holidaze"
        />
        <ProductCard
          title="Auction House"
          description={lorem}
          image={PlaceHolderImg}
          hoverImage={PlaceHolderImgHover}
          link="/holidaze"
        />
      </div>
    </>
  );
}

export default ProductList;
