export default function InfoCard(props) {
  const { icon: Icon, text, bgImage, scrollId, ariaLabel } = props;
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
      style={baseStyle}
      className="text-white p-2 rounded-2xl transition-transform duration-300 hover:scale-105 shadow-lg flex justify-between"
    >
      <div className="w-1/6 lg:w-full h-24 flex items-center justify-center mx-auto mb-0">
        <Icon className="text-6xl lg:text-7xl text-white" />
      </div>
      <div className="flex items-center text-sm p-2 lg:p-0">
        <p>{text}</p>
      </div>
    </div>
  );
}
