import React, { useState } from 'react'
//import styles from "./Hello.module.css"


//이벤트를 거는 방법 1. 함수를 만들어서 전달

//let name = "Mike";

export default function Hello({age}) {


    const [name, setName ] = useState("Mike");
    //const [age, setAge] = useState(props.age);

    const msg = age > 19 ? "성인임" : "미성년자"

    const ChangeName = () => {
        const newName =  name === "Mike" ?  "Jane" : "Mike";
        setName(newName);
        //setAge(age + 1 );
        console.log(name);
    }


  return (
    <div>
    

    <h1>{name}
    ({age}세) : {msg}
    </h1> 
    <button onClick={ChangeName}>누름버튼</button>
    </div>
  )
}
