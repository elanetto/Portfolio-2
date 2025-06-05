import { Link } from "react-router-dom";
import { useState } from "react";

function ProductCard({ title, description, image, hoverImage, link, icons = [] }) {
  const [isHovered, setIsHovered] = useState(false);

  const isVideo = hoverImage && hoverImage.endsWith(".mp4");

  return (
    <Link
      to={link}
      className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 m-2 w-[calc(100%-1rem)] sm:w-[calc(50%-1rem)] md:w-[350px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 w-full">
        {isHovered && hoverImage ? (
          isVideo ? (
            <video
              src={hoverImage}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={hoverImage}
              alt={`${title} hover preview`}
              className="h-full w-full object-cover transition-opacity duration-300"
            />
          )
        ) : (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
        )}
      </div>

      <div className="p-4 text-dark-green">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed mb-2">{description}</p>

        {/* Tech icons row */}
        {icons.length > 0 && (
          <div className="flex gap-2 text-xl text-dark-green">
            {icons.map((IconComponent, index) => (
              <IconComponent key={index} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
