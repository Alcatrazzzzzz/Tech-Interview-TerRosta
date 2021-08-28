import React from "react";
import { Nav } from "./Nav";

interface MainProps {}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main>
      <Nav />
      <div className="content">{children}</div>
    </main>
  );
};
