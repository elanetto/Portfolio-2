import TechIcons from "./../../components/Icons/TechIcons";
import SocialIcons from "./../../components/Icons/SocialIcons";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { scrollToHash } from "./../../utils/scrollToHash";
import { useScrollTarget } from "../../context/useScrollTarget";
import whiteLogo from "./../../assets/logo/at-logo-white.svg";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setScrollTarget } = useScrollTarget();

  function handleScrollToSection(id) {
    if (location.pathname === "/" || location.pathname === "/home") {
      scrollToHash(id);
    } else {
      setScrollTarget(id);
      navigate("/home", { replace: false });
    }
  }

  const handleScrollToEducation = () => handleScrollToSection("education");
  const handleScrollToCV = () => handleScrollToSection("cv");
  const handleScrollToPortfolio = () => handleScrollToSection("portfolio");

  return (
    <footer className="bg-espressoy bg-moss-brown text-white w-full py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <img
            src={whiteLogo}
            className="h-8"
            alt="Anette Therese: white logo"
          />
          <h2 className="text-2xl font-bold">Anette Therese Lindberg</h2>
          <p className="text-sm text-creamy/80">FrontEnd portfolio</p>
          <p className="text-sm text-creamy/80">
            Denne nettsiden er et Vite React prosjekt med Tailwind, Javascript
            og HTML5. Prosjektet er bygd opp i komponenter og kodet i Visual
            Studio Code.
          </p>
          <ul
            className="flex gap-4 text-2xl pt-4"
            aria-label="Tech stack icons"
          >
            <li>
              <TechIcons.vite />
            </li>
            <li>
              <TechIcons.react />
            </li>
            <li>
              <TechIcons.tailwind />
            </li>
            <li>
              <TechIcons.javascript />
            </li>
            <li>
              <TechIcons.html5 />
            </li>
            <li>
              <TechIcons.github />
            </li>
            <li>
              <TechIcons.vscode />
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold text-creamy uppercase tracking-wide">
            Finn frem
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/home"
                className="hover:underline hover:text-sunny cursor-pointer"
              >
                Hjem
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-sunny cursor-pointer"
              >
                Kontakt meg
              </Link>
            </li>
            <li>
              <button
                onClick={handleScrollToEducation}
                className="hover:underline hover:text-sunny text-left cursor-pointer"
                aria-label="Gå til utdanningsseksjon"
              >
                Min utdanning
              </button>
            </li>
            <li>
              <button
                onClick={handleScrollToCV}
                className="hover:underline hover:text-sunny text-left cursor-pointer"
                aria-label="Gå til erfaringsseksjon"
              >
                Min erfaring
              </button>
            </li>
            <li>
              <button
                onClick={handleScrollToPortfolio}
                className="hover:underline hover:text-sunny text-left cursor-pointer"
                aria-label="Gå til portfolioseksjon"
              >
                Se Portfolio
              </button>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="font-semibold text-creamy uppercase tracking-wide text-sm">
            Følg meg
          </h3>
          <div className="flex pt-2 gap-4">
            <a
              href="https://www.linkedin.com/in/anettetherese/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besøk LinkedIn-profilen til Anette Therese"
            >
              {SocialIcons.linkedin()}
            </a>
            <a
              href="https://www.instagram.com/elanetto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besøk Instagram-profilen til Anette: Elanetto"
            >
              {SocialIcons.instagram()}
            </a>
            <a
              href="https://github.com/elanetto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Besøk GitHub-profilen til Anette: Elanetto"
            >
              {SocialIcons.github()}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-creamy/20 text-sm text-center text-creamy/60">
        <p>© {new Date().getFullYear()} Anette Therese Lindberg.</p>
        <p className="italic text-xs text-yellow-800 pt-4">
          Hvorfor titter du her?
        </p>
      </div>
    </footer>
  );
}
