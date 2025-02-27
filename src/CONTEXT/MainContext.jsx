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
  const gettingQueryandResponseLocal = localStorage.getItem(
    "QueryandResponseLocal"
  );
  const parsedQueryandResponseLocal = gettingQueryandResponseLocal ? JSON.parse(gettingQueryandResponseLocal): [];
  const [QueryandResponse, setQueryandResponse] = useState(parsedQueryandResponseLocal);
  const [ChatLoding, setChatLoding] = useState(false);
  const [isEnterQueryBlocked, setisEnterQueryBlocked] = useState(false);

  useEffect(() => {
    (async function querySenderToModel() {
      if (Query) {
        setChatLoding(true);
        setMainInput("");
        setisEnterQueryBlocked(true);

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
        setisEnterQueryBlocked(false);
      }
    })();
  }, [Query]);

  useEffect(() => {
    if (QueryandResponse) {
      const serializableData = JSON.parse(
        JSON.stringify(QueryandResponse, (key, value) => {
          if (typeof value === "object" && value !== null && value.$$typeof) {
            return undefined;
          }
          return value;
        })
      );

      localStorage.setItem(
        "QueryandResponseLocal",
        JSON.stringify(serializableData)
      );
    }
  }, [QueryandResponse]);

  let ContextData = {
    MainInput,
    setMainInput,
    Query,
    setQuery,
    QueryandResponse,
    setQueryandResponse,
    ChatLoding,
    isEnterQueryBlocked,
  };

  return <Context.Provider value={ContextData}>{children}</Context.Provider>;
}

export default MainContext;
