// eslint-disable-next-line no-unused-vars
function InfoCard({ icon: Icon, text, bgImage, scrollId, ariaLabel }) {
  const baseStyle = {
    backgroundImage: `linear-gradient(to bottom right, rgba(108, 118, 74, 0.85), rgba(32, 19, 9, 0.85)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={() => scrollToSection(scrollId)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          scrollToSection(scrollId);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      className="text-white p-2 rounded-2xl flex w-full lg:w-[370px] transform transition-transform duration-300 hover:scale-105 shadow-lg mx-auto"
      style={baseStyle}
    >
      <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
        <Icon className="text-7xl text-white" />
      </div>
      <div className="flex items-center text-sm p-2">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default InfoCard;
