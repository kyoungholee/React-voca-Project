import {useEffect, useState } from 'react'
import axios from 'axios';

export default function useFetch(url) {
    const [datas, setDatas] = useState([]);
    
    const axiosData = async() => {
        const response = await axios.get(url); //단순히 받은 url을 Read(get)을 이용해 읽어오는 역할
        setDatas(response.data);
    };

    useEffect(() => {
        axiosData();
    },[url]);

    return datas;
}



  //.then(res => { 
         //http응답이다.
       //  return res.json()
     //})
