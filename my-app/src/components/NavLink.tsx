import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  heading: string;
  iconFileName: string;
  link?: string;
  subLinks?: NavLinkProps[];
  setCloseMobileMenu?: (value: boolean) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  heading,
  iconFileName,
  subLinks = null,
  link = "/",
  setCloseMobileMenu,
}) => {
  const [showAdditional, setShowAdditional] = useState(false);
  const { pathname } = useLocation();

  return (
    <li className="nav-link">
      <Link
        onClick={(e) => {
          if (subLinks) {
            e.preventDefault();
            setShowAdditional(!showAdditional);
          }
          if (setCloseMobileMenu) setCloseMobileMenu(false);
        }}
        to={link}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="nav-link-container">
          <img
            width="32px"
            height="32px"
            src={`/icons/${iconFileName}`}
            alt={`${heading} icon`}
          />
          <p>{heading}</p>
          {!subLinks ? null : (
            <img
              onClick={() => setShowAdditional(!showAdditional)}
              className="nav-link-hideshow"
              src="/icons/showOrHide.svg"
              alt="showorHidebtn"
              style={showAdditional ? {} : { transform: "rotate(0.5turn)" }}
            />
          )}
          {(pathname === link && pathname !== "/") ||
          (pathname === "/" && heading === "Главная") ? (
            <div className="link-active-block"></div>
          ) : null}
        </div>
      </Link>

      {!showAdditional || !subLinks ? null : (
        <ul style={{ margin: "40px 0 0 65px" }}>
          {subLinks!.map(({ heading, iconFileName }) => {
            return (
              <li key={heading} className="nav-link">
                <div className="nav-link-container">
                  <img
                    width="32px"
                    height="32px"
                    src={`/icons/${iconFileName}`}
                    alt={`${heading} icon`}
                  />
                  <p>{heading}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
