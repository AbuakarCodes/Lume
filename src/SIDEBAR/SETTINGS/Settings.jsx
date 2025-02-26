import { IoMoonSharp } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

function Settings() {
  const [isDark, setisDark] = useState(false);
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  function ThemeHandler() {
    setisDark((prev) => !prev);
  }
  return (
    <div className="min-h-[15%] flex   items-center justify-start">


      <button
        onClick={ThemeHandler}
        className=" lg:block hover:bg-[#E2E7EB] dark:hover:bg-[#353739] transition-all duration-50 p-[.48rem] rounded-[50%] w-auto"
      >
        {isDark ? <FiSun  /> : <IoMoonSharp />}
      </button>
    </div>
  );
}

export default Settings;
