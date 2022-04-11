import { useEffect, useState } from "react"

export const useFetch = (url) => {
 

    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(()=>{

    }, [url])
}
