function PortfolioLayout({ title, description, image, children }) {
  return (
    <div className="p-8 container mx-auto">
      <img
        src={image}
        alt={`UI design for ${title}, part of Anette’s portfolio`}
        className="rounded-xl w-full h-[550px] object-cover object-top mb-6"
      />

      <h1 className="text-4xl font-bold text-dark-green mb-4">{title}</h1>
      <p className="text-lg mb-6">{description}</p>
      {children}
    </div>
  );
}

export default PortfolioLayout;
