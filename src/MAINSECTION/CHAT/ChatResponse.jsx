import LOGO from "../../IMAGES/LOGO.svg";

function ChatResponse({ ModelResponseStore, QueryStore }) {
  return (
    <>
      <div className="flex flex-col gap-y-8 text-[1rem] ">
        <div className=" self-end p-4 md:p-6 bg-[#F0F4F9] rounded-[2rem] rounded-tr-none dark:bg-[#282A2C]">
          {QueryStore}
        </div>
        <div className="flex flex-col gap-y-8 transition-all duration-0 text-[1rem]">
          <div className="self-start flex items-start gap-x-6">
            <div className="flex  flex-shrink-0">
              <img
                className="w-6 h-6 self-start animate-slowSpin"
                src={LOGO}
                alt="Logo"
              />
            </div>

            <div className=" w-full">  {ModelResponseStore}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatResponse;
