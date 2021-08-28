import React from "react";
import { NavLinkList } from "./NavLinkList";

interface NavProps {}
export const Nav: React.FC<NavProps> = () => {
  return (
    <nav>
      <h2>Меню</h2>
      <NavLinkList />
    </nav>
  );
};
