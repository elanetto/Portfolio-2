// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImage from "./../../assets/images/anette_hero_wide.jpg";

export default function ContactCTA() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white text-center lg:rounded-2xl max-w-[1200px] mx-auto shadow-lg mb-16"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(108, 118, 74, 0.9), rgba(48, 102, 109, 0.9)), url(${bgImage})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Kan jeg hjelpe deg?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Ta uforpliktet kontakt, så finner vi ut hva jeg kan gjøre for deg.
        </p>

        <Link to="/contact">
          <button className="bg-cyan-dark text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-cyan-blue hover:text-black transition-colors duration-300 shadow-md cursor-pointer">
            Ta kontakt
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
