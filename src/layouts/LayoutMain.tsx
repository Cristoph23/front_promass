import { CssBaseline } from "@mui/material";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import TopBar from "../components/Topbar";
export default function LayoutMain() {
  const [statusSidebar, setStatusSidebar] = useState(false);
  const openSidebar = () => setStatusSidebar(true);
  const closeSidebar = () => setStatusSidebar(false);

  return (
    <div className="flex">
      <CssBaseline />
      <TopBar STATUS_SIDEBAR={statusSidebar} openSidebar={openSidebar} />
      <Sidebar STATUS_SIDEBAR={statusSidebar} closeSidebar={closeSidebar} />

      <div
        className="w-full h-full min-h-screen overflow-x-hidden"
        style={{ background: "rgb(242, 242, 242)" }}
      >
        <div className="flex items-center justify-center bg-[#334FAF] h-60 px-5">
          <h2 className="text-white font-bold md:text-2xl text-xl text-center">
            {/* {dataPath.title} */}
          </h2>
        </div>
        <div className="-mt-14 md:mb-10 md:mx-28 m-4 h-auto bg-white py-6 rounded-md border border-gray-300 shadow-xl p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
