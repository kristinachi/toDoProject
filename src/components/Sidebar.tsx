import { NavLink } from "react-router-dom";
import { useState } from "react";

import { BiCollapse, BiExpand } from "react-icons/bi";
import { GrInProgress } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdPendingActions } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const items = [
    { label: "To Do", path: "/", icon: <MdPendingActions /> },
    { label: "In Progress", path: "/inprogress", icon: <GrInProgress /> },
    { label: "Done", path: "/done", icon: <IoMdDoneAll /> },
    { label: "Deleted", path: "/deleted", icon: <RiDeleteBin6Fill /> },
  ];

  const renderedItems = items.map((item) => {
    return (
      <NavLink
        to={item.path}
        key={item.label}
        className={({ isActive }) => `sidebarItem ${isActive ? "active" : ""}`}
      >
        <i className="sidebarIcon">{item.icon}</i>
        {isOpen && <div>{item.label}</div>}
      </NavLink>
    );
  });

  return (
    <aside className="sidebar">
      <div className="sidebarList">{renderedItems}</div>

      <div className="sidebarExpand" onClick={handleToggleSidebar}>
        {isOpen ? <BiCollapse /> : <BiExpand />}
      </div>
    </aside>
  );
}
