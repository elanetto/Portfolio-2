import logo from "./../../assets/logo/at_logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] py-6 px-4 md:px-2 flex justify-between items-center text-green-900">
        <Link to="/" className="inline-block">
          <img
            src={logo}
            alt="Logo for Anette Therese"
            className="h-10 w-auto block cursor-pointer select-none"
          />
        </Link>

        <p>This is the header</p>
      </div>
    </header>
  );
}
