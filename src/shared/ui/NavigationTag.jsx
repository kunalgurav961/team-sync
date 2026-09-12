import React from "react";
import { NavLink } from "react-router";

const NavigationTag = ({ path, title, Icon }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `dashboard-nav-item${isActive ? "flex  dashboard-nav-item dashboard-nav-item-active" : "flex  dashboard-nav-item"}`
      }
          end
    >
      <Icon size={15} />
      {title}
    </NavLink>
  );
};

export default NavigationTag;
