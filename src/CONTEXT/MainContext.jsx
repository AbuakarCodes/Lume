import { createContext, useContext, useState } from "react";
import { getAIResponse } from "../API/geminiAI";
import { useEffect } from "react";
import ChatLodingSkeleton from "../SKELETONS/ChatSkeleton";

let Context = createContext();
export function useMainContext() {
  return useContext(Context);
}

function MainContext({ children }) {
  const [MainInput, setMainInput] = useState("");
  const [Query, setQuery] = useState("");
  const [ModelResponse, setModelResponse] = useState("");
  const [QueryandResponse, setQueryandResponse] = useState([]);
  const [ChatLoding, setChatLoding] = useState(false);
  const [MainBgComponent, setMainBgComponent] = useState(true)
  const [isEnterQueryBlocked, setisEnterQueryBlocked] = useState(false)

  // let Data = {
  //   QueryStore: Query,
  //   ModelResponseStore: ModelResponse,
  // }

  // useEffect(() => {
  //   (async function querySenderToModel() {
  //     if (Query) {
  //       setChatLoding(true);

  //       setQueryandResponse((prev) => { return [...prev, { ...Data }] });
  //       setMainInput("");

  //       let Response = await getAIResponse(Query);
  //       setModelResponse(Response);
  //       setChatLoding(false);
  //     }
  //   })();
  // }, [Query]);

  useEffect(() => {
    (async function querySenderToModel() {
      if (Query) {
        setChatLoding(true);
        setMainInput("");
        setMainBgComponent(false)
        setisEnterQueryBlocked(true)

        setQueryandResponse((prev) => [
          ...prev,
          { QueryStore: Query, ModelResponseStore: <ChatLodingSkeleton /> },
        ]);

        let Response = await getAIResponse(Query);
        setModelResponse(Response); 

        setQueryandResponse((prev) =>
          prev.map((item, index) =>
            index === prev.length - 1
              ? { ...item, ModelResponseStore: Response }
              : item
          )
        );

        setChatLoding(false);
        setisEnterQueryBlocked(false)
      }
    })();
  }, [Query]);


  let ContextData = {
    MainInput,
    setMainInput,
    Query,
    setQuery,
    QueryandResponse,
    ChatLoding,
    MainBgComponent,
    isEnterQueryBlocked
  };

  return <Context.Provider value={ContextData}>{children}</Context.Provider>;
}

export default MainContext;
