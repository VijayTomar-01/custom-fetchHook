import { useCallback, useEffect, useState } from "react";


function useFetch(url){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async ()=>{
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            if(!response?.ok) throw new Error(response.statusText);
            const result = await response.json();

            if(result){
                setData(result)
            }
            
        } catch (error) {
            console.log(error);
            setError(error)
        } finally{
            setLoading(false)
        }
    }, [url])

    useEffect(()=>{
        fetchData();
    }, [fetchData])

    return{data, loading, error, fetchData}
}

export default useFetch;