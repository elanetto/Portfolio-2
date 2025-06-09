import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream text-espressoy px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Siden finnes ikke.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-goldy text-white rounded-xl hover:bg-espressoy transition"
      >
        Tilbake til forsiden
      </Link>
    </div>
  );
}

export default NotFound;
