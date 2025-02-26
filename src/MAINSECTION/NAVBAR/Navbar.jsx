import { FaGithub } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import ProductName from "../../../NAME";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <div className=" flex items-center justify-between w-full lg:py-4  lg:px-2">
      <div className="flex items-center gap-x-2">
        <button
          onClick={toggleSidebar}
          className={` text-xl hover:bg-[#E2E7EB] lg:hidden dark:hover:bg-[#353739] transition-all duration-100 lg:p-[.48rem] rounded-[50%] w-auto`}
        >
          <IoMenuSharp />
        </button>
        <h1 className="text-xl font-semibold"> {ProductName}</h1>
      </div>

      <div>
        <a
          target="_blank"
          href="https://github.com/AbuakarCodes/Lume.git"
          className=" lg:block hover:bg-[#E2E7EB] dark:hover:bg-[#353739] transition-all duration-50 p-[.48rem] rounded-[50%] w-auto"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
