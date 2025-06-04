import { Link } from "react-router-dom";
import { useState } from "react";

function ProductCard({ title, description, image, hoverImage, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={link}
      className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 m-2 w-[calc(100%-1rem)] sm:w-[calc(50%-1rem)] md:w-[470px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 w-full">
        <img
          src={isHovered ? hoverImage : image}
          alt={title}
          className="h-full w-full object-cover transition-opacity duration-300"
        />
      </div>
      <div className="p-4 text-dark-green">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
