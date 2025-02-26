import { createContext, useContext, useState } from "react";
import { getAIResponse } from "../API/geminiAI";
import { useEffect } from "react";
import ChatLodingSkeleton from "../SKELETONS/ChatSkeleton"

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
  
        setQueryandResponse((prev) => [
          ...prev,
          { QueryStore: Query, 
            ModelResponseStore: <ChatLodingSkeleton/>
          }
        ]);
  
        let Response = await getAIResponse(Query);
        setModelResponse(Response); // Update the state
  
        // setQueryandResponse((prev) => {
        //   let updatedArray = [...prev];
        //   updatedArray[updatedArray.length - 1].ModelResponseStore = Response; // Update last entry
        //   return updatedArray;
        // });

        setQueryandResponse((prev) =>
          prev.map((item, index) =>
            index === prev.length - 1 ? { ...item, ModelResponseStore: Response } : item
          )
        );
        
  
        setChatLoding(false);
      }
    })();
  }, [Query]);
  



  // console.log(QueryandResponse);

  let ContextData = {
    MainInput,
    setMainInput,
    Query,
    setQuery,
    QueryandResponse,
    ChatLoding,
  };

  return <Context.Provider value={ContextData}>{children}</Context.Provider>;
}

export default MainContext;
