import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import AnetteImg from "./../../assets/images/anette-goldsmiths-wow-2.jpg";
import AnetteImg2 from "./../../assets/images/anette_hero.jpg";
import SocialsImgBg from "./../../assets/images/school-projects-hero.jpg";
import { useNavigate } from "react-router-dom";
import SocialIcons from "./../../components/Icons/SocialIcons";

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 },
  });
}

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const serviceId = "at_portfolio_page";
    const templateId = "template_bccpsce";
    const publicKey = "Ay55FzsTLcNdFtptY";

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setSubmitted(true);
        setError(null);
        setFormData({ name: "", email: "", message: "" });
        toast.success("Meldingen ble sendt! ✨");
        launchConfetti();

        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((err) => {
        console.error("Email send error:", err);
        setError(err.message || "Noe gikk galt! 😢");
        toast.error("Noe gikk galt! 😢");
      });
  }

  return submitted ? (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(108, 118, 74, 0.85), rgba(32, 19, 9, 0.85)), url(${AnetteImg})`,
      }}
    >
      <div className="z-10 max-w-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tusen takk!</h2>
        <p className="text-lg md:text-xl mb-6">
          Meldingen din er sendt 🌱 Jeg svarer deg så snart jeg kan!
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-leaf-green text-black font-semibold px-6 py-3 rounded-full hover:bg-dark-green hover:text-white transition-colors duration-300 shadow-md"
        >
          Tilbake til forsiden
        </button>
      </div>
    </section>
  ) : (
    <section
      className="min-h-screen mx-auto text-dark-green"
      aria-labelledby="contact-heading"
    >
      <div>
        {/* Hero image with overlay */}
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[25rem] px-6 text-white text-center shadow-lg mb-12 flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(50, 138, 64, 0.7), rgba(48, 102, 109, 0.7)), url(${AnetteImg2})`,
          }}
        >
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Om Anette Therese
            </h2>
            <p className="text-lg md:text-xl">
              ...og hva jeg kan hjelpe deg med
            </p>
          </div>
        </div>

        <h1 className="sr-only" id="contact-heading">
          Kontakt Anette Therese Lindberg
        </h1>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4 md:px-0 text-dark-green mb-12">
          {/* Left section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-dark">
              Hvordan jeg kan bidra
            </h3>
            <p className="mb-4">
              Jeg kan hjelpe med nettsidedesign, grafisk design, og å få frem et
              tydelig budskap.
            </p>
            <p>
              Med min erfaring og utdanning kan jeg sette opp en fullstack
              nettside, hvor jeg både designer, programmerer og lager innhold
              tilpasset deg og dine behov.
            </p>
          </div>

          {/* Right section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-dark">
              Hvem jeg er
            </h3>
            <p className="mb-4">
              Jeg er en nysgjerrig, kreativ og løsningsorientert person med
              lidenskap for god design og brukeropplevelse.
            </p>
            <p>
              Jeg har stor skaperglede, og bruker fritiden på å drive en egen
              klistremerkebutikk, samt at jeg liker å lese og å spille
              videospill.
            </p>
          </div>
        </div>

        <div
          className="relative max-w-[1200px] mx-auto bg-cover bg-center bg-no-repeat py-20 px-6 text-white text-center rounded-2xl shadow-lg mb-14"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(108, 118, 74, 0.55), rgba(32, 19, 9, 0.55)), url(${AnetteImg})`,
          }}
        >
          <div className="relative z-10 max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt meg</h2>
            <p className="text-lg md:text-xl">Send meg gjerne en melding her</p>
          </div>
        </div>

        {/* Kontakt skjema */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-6 max-w-[600px] w-full mx-auto px-4"
        >
          <div className="w-full">
            <label htmlFor="name" className="block font-semibold mb-1">
              Fullt navn
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-blue"
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="block font-semibold mb-1">
              E-postadresse
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-blue"
            />
          </div>

          <div className="w-full">
            <label htmlFor="message" className="block font-semibold mb-1">
              Melding
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              minLength={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-blue"
            />
            <p className="text-sm text-gray-600 mt-1">Minst 5 tegn</p>
          </div>

          <button
            type="submit"
            className="bg-cyan-blue text-black font-semibold px-6 py-3 rounded-full hover:bg-dark-green hover:text-white transition-colors duration-300 shadow-md"
          >
            Send melding
          </button>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </form>

        <div
          className="relative max-w-[1200px] mx-auto bg-cover bg-center bg-no-repeat py-20 px-6 text-white text-center rounded-2xl shadow-lg mb-12 mt-12"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(108, 118, 74, 0.9), rgba(48, 102, 109, 0.9)), url(${SocialsImgBg})`,
          }}
        >
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ...eller email meg:
            </h2>
            <p className="pb-24">
              <button
                onClick={() =>
                  (window.location.href = [
                    "mailto:",
                    "kontakt",
                    "@",
                    "anettetherese",
                    ".no",
                  ].join(""))
                }
                className="underline text-white hover:text-cyan-blue cursor-pointer"
                aria-label="Send e-post til kontakt@anettetherese.no"
              >
                {["kontakt", "@", "anettetherese", ".", "no"].join("")}
              </button>
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Du kan også finne meg på:
            </h2>
            <div className="flex justify-center gap-4">
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
      </div>
    </section>
  );
}
