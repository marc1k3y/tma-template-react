import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
];

export const NavbarElement = () => {
  return (
    <div className={css.wrapper}>
      {links.map((item) => <NavLink key={item.to} to={item.to}>{item.title}</NavLink>)}
    </div>
  );
}