import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

function ChatLoadingSkeleton() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Skeleton
        baseColor="#E5E7EB"
        highlightColor="#F3F4F6"
        className="lg:w-[30vw] w-[60vw] h-[15px] dark:bg-[#2D2F33] dark:text-[#3A3C40]"
      />

      <Skeleton
        baseColor="#E5E7EB"
        highlightColor="#F3F4F6"
        className="lg:w-[25vw] w-[50vw] h-[15px] dark:bg-[#2D2F33] dark:text-[#3A3C40]"
      />

      <Skeleton
        baseColor="#E5E7EB"
        highlightColor="#F3F4F6"
        className="lg:w-[20vw] w-[40vw] h-[15px] dark:bg-[#2D2F33] dark:text-[#3A3C40]"
      />
    </div>
  );
}

export default ChatLoadingSkeleton;
