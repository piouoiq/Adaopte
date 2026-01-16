// src/components/Header.tsx

import { NavLink } from "react-router";
import { link } from "./pageLinks";

export default function Header() {
  return (
    <header className="bg-primary-color shadow-md">
      <div className="w-full px-10 py-4 flex justify-between items-center">
        <ul>
          <li>
            <a
              href="https://cataas.com/cat"
              className="flex items-center gap-2 text-2xl font-medium text-gray-800 hover:opacity-80 transition-opacity"
            >
              <span role="img" aria-label="patte">
                🐾
              </span>
              <span>
                <strong>Ada</strong>
                <strong style={{ color: "#ff6d38" }}>opte</strong>
              </span>
            </a>
          </li>
        </ul>
        <nav aria-label="Navigation principale">
          <ul className="flex gap-8 items-center justify-center flex-1">
            {link.map((key) => (
              <li key={key.link}>
                <NavLink
                  to={key.link}
                  className="text-gray-800 font-medium hover:text-secondary-color transition-colors flex items-center gap-1"
                >
                  {key.icon}
                  {key.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <NavLink
          to="/"
          className="bg-btn-secondary-bg text-black cursor-pointer px-4! py-2! rounded-full! hover:bg-btn-hover-secondary-bg"
        >
          Faire un don 🫶🏻
        </NavLink>
      </div>
    </header>
  );
}
