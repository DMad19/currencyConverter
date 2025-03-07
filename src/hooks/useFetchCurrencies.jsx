import { useEffect, useState } from "react";

export default function useFetchCurrencies(currency){
    try{
        const [data,setData] = useState({})
        useEffect(()=>{
            const fetchData = async () => {
                let endPoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                let res = await fetch(endPoint)
                let resJson = await res.json()
                setData(resJson[currency])
            }
            fetchData()
        },[currency])
        return data
    }catch(e){
        console.log(e)
    }
}