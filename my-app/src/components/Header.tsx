import React, { useState } from "react";
import { MobileNav } from "./MobileNav";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="header">
      <div className="header-logo">
        <img src={"/icons/logo.svg"} alt="logo" />
        <p>Wrench CRM</p>
      </div>
      <div className="header-user">
        <img src={"/icons/person.svg"} alt="logo" />
        <p>Имя Фамилия</p>
      </div>
      <img
        src="/icons/burger.svg"
        alt="burger icon"
        className="header-burger"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />
      {showMobileMenu ? (
        <MobileNav setCloseMobileMenu={(value) => setShowMobileMenu(value)} />
      ) : null}
    </header>
  );
};
