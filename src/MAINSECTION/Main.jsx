import Navbar from "./NAVBAR/Navbar";
import Chat from "./CHAT/Chat";
import InputSection from "./INPUT/InputSection";
import { useMainContext } from "../CONTEXT/MainContext";
import MainBG from "./MainBG";


function Main({ toggleSidebar, isSidebarOpen }) {
  let {MainBgComponent} = useMainContext()

  return (
    <main className="transition-all duration-300 p-3 pt-0 flex flex-col h-dvh w-full bg-white text-black dark:text-white dark:bg-[#1B1C1D] relative">
      {MainBgComponent?<MainBG/>: null}
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <Chat />

      <InputSection />
    </main>
  );
}

export default Main;
