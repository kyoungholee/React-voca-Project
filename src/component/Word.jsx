//단어를 표현해줌 
import axios from 'axios';
import React, { useState } from 'react'

                                //새로운 w 변수명으로 할당됌 !! 
export default function Word({wordes : w}) {
    
    const [wordes , setWordes] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone , setIsDone] = useState(wordes.isDone);


    const toggleShow = () => {
        setIsShow(!isShow);
    }

    const toggleDone = () => {


        fetch(`http://localhost:3001/words/${wordes.id}`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                ...wordes,
                isDone : !isDone,
            }),
        }).then(res => {
            if( res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if(window.confirm('삭제 하시겠습니까~?')) {

            axios.delete(`http://localhost:3001/words/${wordes.id}`, setWordes({...wordes, id : 0}))

        //     fetch(`http://localhost:3001/words/${wordes.id}`, {
        //         method : 'DELETE',
        //     }).then(res => {
        //         if(res.ok) {
        //             setWordes({
        //                 ...wordes,
        //                 id : 0,
        //             })
        //         }
        //     })
        }
    }

    if(wordes.id === 0 ) {
      return null;
    }

  return (
    <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked = {isDone} onChange = {toggleDone}/>
            </td>
              <td>{wordes.eng}</td>
              <td>{isShow && wordes.kor}</td>
              <td>
                    <button onClick={toggleShow}>
                        뜻 {isShow ? '숨기기' : '보기'} 
                      </button>
                    <button onClick={del}  className="btn_del">삭제 </button>
              </td>
    </tr>
  )
}
