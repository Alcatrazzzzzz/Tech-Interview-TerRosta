import { motion } from "framer-motion";
import React from "react";
import { NavLinkList } from "./NavLinkList";

interface MobileNavProps {
  setCloseMobileMenu?: (value: boolean) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ setCloseMobileMenu }) => {
  return (
    <motion.div
      initial={{ y: "-30%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mobile-nav"
    >
      <div className="header-user-mobile">
        <img src={"/icons/personBlack.svg"} alt="logo" />
        <p>Имя Фамилия</p>
      </div>
      <h2 style={{ color: "black", margin: "0 0 0 32px" }}>Меню</h2>
      <NavLinkList
        setCloseMobileMenu={
          setCloseMobileMenu ? (value) => setCloseMobileMenu(value) : undefined
        }
      />
    </motion.div>
  );
};
