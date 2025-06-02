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
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-stretch mt-4 mb-24">
        <ProductCard
          title="Holidaze"
          description={lorem}
          image={PlaceHolderImg}
          hoverImage={PlaceHolderImgHover}
          link="/portfolio/holidaze"
        />
        <ProductCard
          title="Frontend Notes"
          description={lorem}
          image={PlaceHolderImg}
          hoverImage={PlaceHolderImgHover}
          link="/portfolio/frontend-notes"
        />
        <ProductCard
          title="Design System"
          description={lorem}
          image={PlaceHolderImg}
          hoverImage={PlaceHolderImgHover}
          link="/portfolio/design-system"
        />
      </div>
    </>
  );
}

export default ProductList;
