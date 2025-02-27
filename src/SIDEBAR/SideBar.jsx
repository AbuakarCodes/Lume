import { IoMenuSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Settings from "./SETTINGS/Settings";
import { useMainContext } from "../CONTEXT/MainContext";

function SideBar({ isOpen, toggleSidebar }) {
  let { setQueryandResponse } = useMainContext();
  function newChatHandler() {
    setQueryandResponse([]);
    localStorage.removeItem("QueryandResponseLocal");
  }
  return (
    <div
      className={` absolute lg:static top-0 left-0 z-50 h-dvh p-4 pr-0 bg-[#F0F4F9] dark:bg-[#282A2C] 
    transition-all duration-300 grid grid-rows-[auto_1fr_auto] md:rounded-tr-md md:rounded-br-md lg:rounded-tr-lg lg:rounded-br-lg overflow-hidden
    ${
      isOpen
        ? "w-[75%] lg:w-[25%] translate-x-0"
        : "w-0 lg:w-[5%] -translate-x-full lg:translate-x-0"
    }`}
    >
      <div className=" min-h-[7rem] w-full flex flex-col items-start justify-between ">
        <button
          onClick={toggleSidebar}
          className="text-xl lg:block hover:bg-[#E2E7EB] dark:hover:bg-[#353739] transition-all duration-100 p-[.48rem] rounded-[50%] w-auto"
        >
          <IoMenuSharp />
        </button>

        <div className={`w-[7rem] h-8 flex items-center gap-x-2`}>
          <button
            onClick={newChatHandler}
            className="text-xl lg:block hover:bg-[#E2E7EB] dark:hover:bg-[#353739] transition-all duration-100 p-[.48rem] rounded-[50%] w-auto"
          >
            <IoMdAdd />
          </button>
          {isOpen ? <div className="text-[.9rem]">New chat</div> : null}
        </div>
      </div>

      <div className="min-h-[70%] "></div>

      <Settings />
    </div>
  );
}

export default SideBar;
