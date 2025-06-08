import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PortfolioLayout({
  title,
  description,
  reflections,
  images = [],
  icons = [],
  liveLink,
  githubLink,
  children,
}) {
  return (
    <div className="p-8 container mx-auto mb-58 mt-0">
      {/* Image Carousel */}
      {images.length > 0 && (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="mb-6 rounded-xl shadow"
        >
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1} for ${title}`}
                className="rounded-xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover object-top"
              />
            </div>
          ))}
        </Carousel>
      )}

      {/* Title and description */}
      <h1 className="text-4xl font-bold text-dark-green mb-4">{title}</h1>
      <p className="text-lg mb-6">{description}</p>

      {/* Reflections */}
      {reflections && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-dark-green mb-2">
            Refleksjoner
          </h2>
          <p className="text-base">{reflections}</p>
        </div>
      )}

      {/* Icons */}
      {icons.length > 0 && (
        <div className="flex gap-4 flex-wrap mb-6 text-2xl text-dark-green">
          {icons.map((Icon, i) => (
            <div key={i}>{Icon()}</div>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-4 mb-8">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-dark-green bg-leaf-green text-dark-green hover:scale-105 hover:text-white px-4 py-2 rounded hover:bg-opacity-80 transition cursor-pointer"
          >
            Se publisert nettside
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gray-800 hover:text-white bg-cyan-blue text-black hover:scale-105 px-4 py-2 rounded hover:bg-opacity-80 transition cursor-pointer"
          >
            GitHub Repo
          </a>
        )}
      </div>

      {/* Custom child content */}
      {children}
    </div>
  );
}

export default PortfolioLayout;
