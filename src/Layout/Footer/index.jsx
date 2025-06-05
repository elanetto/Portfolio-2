import TechIcons from "./../../components/Icons/TechIcons";

export function Footer() {
  return (
    <footer className="bg-espressoy bg-moss-brown text-white w-full py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Anette Therese Lindberg</h2>
          <p className="text-sm text-creamy/80">Dette er min portfolio</p>
          <p className="text-sm text-creamy/80">
            Denne nettsiden er et Vite React prosjekt med Tailwind, Javascript
            og HTML5. Prosjektet er bygd opp i komponenter og kodet i Visual
            Studio Code.
          </p>
          <p className="flex gap-4 text-2xl pt-4">
            <TechIcons.vite />

            <TechIcons.react />

            <TechIcons.tailwind />

            <TechIcons.javascript />

            <TechIcons.html5 />

            <TechIcons.github />

            <TechIcons.vscode />
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold text-creamy uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="/home" className="hover:underline hover:text-sunny">
                Home
              </a>
            </li>
            <li>
              <a href="/search" className="hover:underline hover:text-sunny">
                Venues
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-sunny">
                Bookings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-sunny">
                My Account
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="font-semibold text-creamy uppercase tracking-wide text-sm">
            Follow Us
          </h3>
          <p>ikon</p>
          <p>ikon</p>
          <p>ikon</p>
          <p>ikon</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-creamy/20 text-sm text-center text-creamy/60">
        <p>
          © {new Date().getFullYear()} Anette Therese Lindberg. All rights
          reserved.
        </p>
        <p className="italic text-xs">Hvorfor titter du her? 👀</p>
      </div>
    </footer>
  );
}
