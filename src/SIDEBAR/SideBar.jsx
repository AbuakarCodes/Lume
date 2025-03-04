import { IoMenuSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { useMainContext } from "../CONTEXT/MainContext";
import { FaGithub } from "react-icons/fa6";
import ChatHstory from "./CHAThISTORY/ChatHstory";
import { Link } from "react-router";

function SideBar({ isOpen, toggleSidebar }) {
  let { HistoryChat, setHistoryChat, setQueryandResponse, QueryandResponse } =
    useMainContext();
  function newChatHandler() {
    localStorage.removeItem("QueryandResponseLocal");
    setQueryandResponse([]);
  }
  return (
    <div
      className={` absolute lg:static top-0 left-0 z-50 h-dvh p-4 pr-0 bg-[#F0F4F9] dark:bg-[#282A2C] 
    transition-all duration-300 flex flex-col rounded-tr-md rounded-br-md lg:rounded-tr-lg lg:rounded-br-lg overflow-hidden
    ${
      isOpen
        ? "w-[75%] lg:w-[25%] translate-x-0"
        : "w-0 lg:w-[5%] -translate-x-full lg:translate-x-0"
    }`}
    >
      <div className=" min-h-[7rem] w-full flex flex-col items-start justify-between mb-[1rem] md:mb-[2rem] lg:mb-[3rem]">
        <button
          onClick={toggleSidebar}
          className="text-xl lg:block hover:bg-[#E2E7EB] dark:hover:bg-[#353739] transition-all duration-100 p-[.48rem] rounded-[50%] w-auto"
        >
          <IoMenuSharp />
        </button>

        <div
          onClick={newChatHandler}
          className={`${
            isOpen ? "cursor-pointer dark:bg-[#1B1C1D] bg-white" : null
          }  h-8 flex items-center gap-x-2  rounded-[.68rem] py-6  pr-6 `}
        >
          <button className="  text-xl lg:block hover:bg-[#E2E7EB] dark:hover:bg-[#353739] transition-all duration-100 p-[.48rem] rounded-[50%] w-auto">
            <IoMdAdd />
          </button>
          {isOpen ? <div className="text-[.9rem]">New chat</div> : null}
        </div>
      </div>

      <div className={`${!isOpen ? "invisible" : null} mb-6`}>
        <h1>Chat History</h1>
      </div>
      <div
        className={`${
          !isOpen ? "invisible" : null
        } h-[70%]  grow overflow-y-scroll no-scrollbar scroll-smooth pr-[.48rem]  `}
      >
        {HistoryChat.map((elem) => {
          return <ChatHstory ChatHstoryQueryStore={elem.QueryStore} />;
        })}
      </div>

      <div className="flex">
        <Link
          target="_blank"
          to="https://github.com/AbuakarCodes/Lume.git"
          className=" lg:block hover:bg-[#E2E7EB] dark:hover:bg-[#353739] p-[.48rem] rounded-[50%] "
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
