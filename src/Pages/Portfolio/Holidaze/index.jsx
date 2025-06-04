import PortfolioLayout from "./../../../Layout/PortfolioLayout";
import HolidazeImg from "./../../../assets/portfolio/card/placeholder_portfolio_card.png";

function Holidaze() {
  return (
    <PortfolioLayout
      title="Holidaze"
      description="A venue booking site where users can book places and manage venues."
      image={HolidazeImg}
    >
      <p>
        This project was built using React, Tailwind, and a custom API. It
        includes full CRUD functionality, login, search, filtering and mobile
        support.
      </p>
    </PortfolioLayout>
  );
}

export default Holidaze;
