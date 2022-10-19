//더미 데이터를 불러 와야함

//import dummy from "../db/data.json";
//import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import useFetch from '../hooks/useFetch';

export default function DayList() {

    const days = useFetch("http://localhost:3001/days");

    //

    // const [days, setDays] = useState([]);

    // useEffect(() => {
    //  //api 비동기 통신
    //     fetch("http://localhost:3001/days")
    //     .then(res => { 
    //         //http응답이다.
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // },[])

  return (
    <div>DayList

        <ul className="list_day">
            {days.map(days => (
                <li key = {days.id}>
                    <Link to = {`/day/${days.day}`} >Day {days.day} </Link>
                </li>
            ))}
        </ul>

    </div>
  )
}
