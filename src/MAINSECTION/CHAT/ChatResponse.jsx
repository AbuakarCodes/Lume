import LOGO from "../../IMAGES/LOGO.svg";

function ChatResponse({ ModelResponseStore, QueryStore, imageAnimation }) {
  return (
    <>
      <div className="flex flex-col gap-y-8 text-[1rem] ">
        <div className=" self-end p-4 md:p-6 bg-[#F0F4F9] rounded-[2rem] rounded-tr-none dark:bg-[#282A2C] ">
          {QueryStore}
        </div>
        <div className="flex flex-col gap-y-8  items-start text-[1rem]">
          <div className=" self-start flex items-start gap-x-4 md:gap-x-6">
            <div className="flex  flex-shrink-0 rounded-[50%]">
              <img
                className={`${imageAnimation?"animate-slowSpin":null}  w-6 h-6 self-start`}
                src={LOGO}
                alt="Logo"
              />
            </div>

            <div className=" w-full"> {ModelResponseStore}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatResponse;
