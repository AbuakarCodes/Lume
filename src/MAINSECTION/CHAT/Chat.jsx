import { useMainContext } from "../../CONTEXT/MainContext";
import ChatResponse from "./ChatResponse";
import ChatLoadingSkeleton from "../../SKELETONS/ChatSkeleton";

function Chat() {
  let {QueryandResponse} = useMainContext()
  return (
    <>
      <div className="  flex-grow flex flex-col w-full  lg:w-[65%] mx-auto overflow-y-auto no-scrollbar ">
        <div className=" scroll-smooth  flex flex-col  gap-y-4 ">
          {
            QueryandResponse.map((elem)=>{
              return <ChatResponse QueryStore={elem.QueryStore} ModelResponseStore={elem.ModelResponseStore}/>
            })
          }
        </div>
      </div>
    </>
  );
}

export default Chat;
