import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-400 flex items-center justify-between shadow-md border-b">
      <div className="text-4xl m-3 rounded hover:text-white hover:bg-gray-700 py-2">
        <Link className="w-full h-full px-3" to="/">
          Evyn Newton
        </Link>
      </div>
      <div className="flex justify-evenly w-1/2 p-2">
        <Link
          className="text-yellow-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium
          text-lg border border-solid shadow-md"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-yellow-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-lg border border-solid shadow-md"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-yellow-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-lg border border-solid shadow-md"
          to="/dev"
        >
          Software Development
        </Link>
        <Link
          className="text-yellow-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-lg border border-solid shadow-md"
          to="/theater"
        >
          Theater and Lighting
        </Link>
      </div>
    </nav>
  );
}
