import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';

function ChatLoadingSkeleton() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Skeleton 
           width={500} 
           height={15} 
           baseColor="#E5E7EB" 
           highlightColor="#F3F4F6" 
           className="dark:!bg-[#2D2F33] dark:!text-[#3A3C40]"
         />
      <Skeleton 
        width={400} 
        height={15} 
        baseColor="#E5E7EB" 
        highlightColor="#F3F4F6" 
        className="dark:!bg-[#2D2F33] dark:!text-[#3A3C40]"
      />
      <Skeleton 
        width={300} 
        height={15} 
        baseColor="#E5E7EB" 
        highlightColor="#F3F4F6" 
        className="dark:!bg-[#2D2F33] dark:!text-[#3A3C40]"
      />
    </div>
  );
}

export default ChatLoadingSkeleton;
