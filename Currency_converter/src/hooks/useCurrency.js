import { data } from "autoprefixer";
import { useEffect, useState } from "react";
function useCurrency(currency) {
    const[data,setdata]=useState({})

    const fetchData = async () => {

        const response = await fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const json = await response.json();
        setdata(json[currency]);
        console.log(json);
    };

    useEffect(()=>{
        fetchData(); 
    },[currency]);
    return data; //return the state so it can be used
}
export default useCurrency;