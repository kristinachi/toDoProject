import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Root() {
  return (
    <div className="layout">
      <Header />

      <div className="layoutWrapper">
        <Sidebar />
        <div className="layoutMain">
          <div className="page">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
