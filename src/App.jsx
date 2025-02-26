import { useState } from "react";
import Main from "./MAINSECTION/Main";
import SideBar from "./SIDEBAR/SideBar";

export default function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  return (
    
    <>
      <div className="flex min-h-screen bg-white dark:bg-[#1B1C1D] text-black dark:text-white transition-all duration-300">
        <SideBar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setisSidebarOpen(!isSidebarOpen)}
        />

        <Main toggleSidebar={() => setisSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
      </div>
    </>
  );
}
