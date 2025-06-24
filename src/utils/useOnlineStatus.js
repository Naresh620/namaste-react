import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [OnlineStatus,setOnlineSatus]=useState(true);

useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnlineSatus(false)
    });
    window.addEventListener("online",()=>{
        setOnlineSatus(true)
    });
},[]);

    return OnlineStatus
};
export default useOnlineStatus;