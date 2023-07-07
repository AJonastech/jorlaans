import React from "react";
import FlashInfo from "./FlashInfo";
import SaveInfo from "./SaveInfo";

function Nav() {
  return (
    <header className="w-full">
      <FlashInfo />
      <SaveInfo />
      <nav className="flex justify-between">
        <h1 className="text-3xl">Jorlaans</h1>
        <ul className="flex gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Quick offers</li>
          <li>Shop</li>
          <li>Saved items</li>
          <li>Comtact Us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
