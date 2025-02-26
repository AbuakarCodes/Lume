import Navbar from "./NAVBAR/Navbar";
import Chat from "./CHAT/Chat";
import InputSection from "./INPUT/InputSection";
import { useMainContext } from "../CONTEXT/MainContext";


function Main({ toggleSidebar, isSidebarOpen }) {

  return (
    <main className="transition-all duration-300 p-3 pt-0 flex flex-col h-screen w-full bg-white text-black dark:text-white dark:bg-[#1B1C1D] relative">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <Chat />

      <InputSection />
    </main>
  );
}

export default Main;
