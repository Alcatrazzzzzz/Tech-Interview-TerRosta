import React from "react";
import { NavLink } from "./NavLink";

interface NavLinkListProps {
  setCloseMobileMenu?: (value: boolean) => void;
}

export const NavLinkList: React.FC<NavLinkListProps> = ({
  setCloseMobileMenu,
}) => {
  return (
    <ul>
      <NavLink
        setCloseMobileMenu={
          setCloseMobileMenu ? (value) => setCloseMobileMenu(value) : undefined
        }
        link="/"
        heading="Главная"
        iconFileName="main.svg"
      />
      <NavLink
        setCloseMobileMenu={
          setCloseMobileMenu ? (value) => setCloseMobileMenu(value) : undefined
        }
        link="/address"
        heading="Поиск адресов"
        iconFileName="search.svg"
      />
      <NavLink
        setCloseMobileMenu={
          setCloseMobileMenu ? (value) => setCloseMobileMenu(value) : undefined
        }
        heading="Таблицы"
        iconFileName="tables.svg"
      />
      <NavLink
        setCloseMobileMenu={
          setCloseMobileMenu ? (value) => setCloseMobileMenu(value) : undefined
        }
        heading="Календарь"
        iconFileName="calendar.svg"
      />
      <NavLink
        setCloseMobileMenu={
          setCloseMobileMenu ? (value) => setCloseMobileMenu(value) : undefined
        }
        heading="Карты"
        iconFileName="maps.svg"
      />
      <NavLink
        setCloseMobileMenu={
          setCloseMobileMenu ? (value) => setCloseMobileMenu(value) : undefined
        }
        heading="Виджеты"
        iconFileName="vidgets.svg"
      />
      <NavLink
        setCloseMobileMenu={
          setCloseMobileMenu ? (value) => setCloseMobileMenu(value) : undefined
        }
        heading="Настройки"
        iconFileName="options.svg"
        subLinks={[
          { heading: "Настройки профиля", iconFileName: "profile.svg" },
          { heading: "Управление финансами", iconFileName: "finances.svg" },
        ]}
      />
      <NavLink heading="Выход" iconFileName="exit.svg" />
    </ul>
  );
};
