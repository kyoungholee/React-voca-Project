import React, { useRef }  from 'react'
import useFetch from '../hooks/useFetch'
import {useNavigate} from "react-router-dom"

export default function CreateWord() {

    const days = useFetch("http://localhost:3001/days");
    const history =  useNavigate(); 

    const onSubmit = (e) => {
        e.preventDefault();

        //console.log(engRef.current.value);
        //console.log(korRef.current.value);
        //console.log(dayRef.current.value);

        fetch(`http://localhost:3001/words/`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone : false,
            }),
        }).then(res => {
            if( res.ok) {
                alert("생성이 완료 되었습니다.");
                history(`/day/${dayRef.current.value}`);
            }
        });
    }

    //useRef는 DOM에 접근할 수 있게 해주고 focus나 스크롤 위치 확인 등 dom에서 할 수 있는 일을 
    // useRef로 조정 가능 하다 
    // input 창에 입력을 해서 저장 혹은 가입 해야하는 상황에는 항상 useRef를 사용해야 한다.
    // 이유는 dom에 반영딘 이후 렌더링을 해줘야 하기 때문에 ref를 이용해 dom에 접근하는 것이다.  
    const engRef = useRef(null);
    const korRef = useRef(null);    
    const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
        <div className='input_area'>
            <label>Eng</label>
            <input type = "text" placeholder="comlasd"  ref = {engRef} />
        </div>
        <div className='input_area'>
            <label>KOR</label>
            <input type = "text" placeholder="컴터" ref = {korRef} />
        </div>
        <div className='input_area'>
            <label>Day</label>
            <select ref = {dayRef}>
                {days.map(day => (
                    
                <option key = {day.id} value = {day.day}>{day.day}</option>
                ))}

            </select>
        </div>
        <button>저장하기</button>
    </form>
  )
}
