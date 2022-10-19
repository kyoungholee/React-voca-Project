import React from 'react'
import useFetch from '../hooks/useFetch'
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export default function CreateDay() {

    const days = useFetch("http://localhost:3001/days");
    const history =  useNavigate(); 


    const addDay = async() => {
        const day = days.length + 1;

        await axios.post(`http://localhost:3001/days/`,{day})
        alert("생성이 완료 되었습니다.");
        history(`/`);

        //서버 요청 !!
        // axios(`http://localhost:3001/days/`, {
        //     method : "POST",
        //     headers : {
        //         "Content-Type" : "application/json",
        //     },
        //     data : {
        //         day : days.length + 1
        //     },
        // }).then(res => {
        //     if( res.data) {
        //         alert("생성이 완료 되었습니다.");
        //         history(`/`);
        //     }
        // }).catch(err => console.log(err));
    }

    return (
    <div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>

    </div>
  )
}
