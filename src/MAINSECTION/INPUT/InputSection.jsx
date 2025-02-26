import { IoMdAdd } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import ProductName from "../../../NAME";
import { useMainContext } from "../../CONTEXT/MainContext";
import { useEffect, useRef } from "react";

function InputSection() {
  let {setMainInput , MainInput, setQuery, isEnterQueryBlocked} = useMainContext()
  let inputRef = useRef(null)
  const sendbuttonRef = useRef(null);

  function inputHandler() {setMainInput(inputRef.current.value)}
  function QueryHandler() {
    setQuery(MainInput)
  }
  
  return (
   
    <div>
      <div className="lg:max-w-[65%] pt-4 mx-auto flex gap-y-3  flex-col items-center ">
        <div className=" transition-all duration-300 flex items-center w-full h-[3.5rem] border border-gray-300 bg-[#F0F4F9] dark:bg-[#282A2C] rounded-[4rem] px-2 ">
          <button className="inline-flex items-center justify-center w-10 h-10 text-sm text-gray-900 dark:text-white hover:bg-[white]  dark:hover:bg-[#1B1C1D] dark:bg-[282A2C] transition-all duration-150 rounded-full">
            <IoMdAdd className="text-2xl" />
          </button>

          <input
            ref={inputRef}
            onChange={inputHandler}
            value={MainInput}
            type="text"
            id="website-admin"
            className=" transition-all duration-300 flex-1 outline-none min-w-0 w-full h-full text-lg px-2.5 py-2 bg-[#F0F4F9] dark:bg-[#282A2C] text-gray-900 dark:text-white"
            placeholder={`Ask From ${ProductName}`}
          />

          <button disabled={isEnterQueryBlocked}  ref={sendbuttonRef}  onClick={QueryHandler} className={`inline-flex items-center justify-center w-10 h-10 text-sm ${isEnterQueryBlocked? "text-gray-400 cursor-not-allowed " :"text-black "} dark:text-white bg-white hover:bg-[#E4E8ED]    dark:hover:bg-[#1B1C1D] transition-all duration-150 rounded-full`}>
            <IoSend className="text-xl" />
          </button>
        </div>

        <p className="hidden md:block">{ProductName} can make mistakes, so double-check it</p>
      </div>
    </div>
  );
}

export default InputSection;
