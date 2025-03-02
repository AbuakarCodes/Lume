import { useMainContext } from "../../CONTEXT/MainContext";

function ChatHstory({ ChatHstoryQueryStore }) {
  let { setQuery } = useMainContext();
  function HistoryChatQuery() {
    setQuery(ChatHstoryQueryStore);
  }
  return (
    <button
      onClick={HistoryChatQuery}
      className="overflow-x-auto flex no-scrollbar mb-3 w-[70%] lg:w-full bg-[#E4E8EC] hover:bg-[#e3ecf5] dark:bg-[#1B1C1D]  dark:hover:bg-[#1f2021] p-[.7rem] rounded-xl   "
    >
      <div>{ChatHstoryQueryStore}</div>
    </button>
  );
}

export default ChatHstory;
