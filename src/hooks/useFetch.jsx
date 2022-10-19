import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(()=> {

     //api 비동기 통신
     fetch(url)
     .then(res => { 
         //http응답이다.
         return res.json()
     })
     .then(data => {
         setData(data);
     })

    },[url]);

    return data;
}
