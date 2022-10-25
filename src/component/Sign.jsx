import React, { useState } from 'react'
import style from '../Sign.module.css';

export default function Sign() {
    
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
    <div className={`${style.Sign_start}`}>
    <h2>회원가입</h2>
    </div>

    <form onSubmit = {onSubmit}>
        <div className={`${style.ID_start}`}>
            <label>
                아이디
            </label>
            <input className={`${style.ID_input}`} name = "userName" value={id} placeholder='아이디를 입력해주세요' onChange />
        </div>

        <div className={`${style.ID_start}`}>
            <label>
                이름
            </label>
            <input className={`${style.ID_input}`} name = "NickName" value={name} placeholder='이름을 입력해주세요' onChange />
        </div>


        <div className={`${style.PW_start}`}>
            <label>
                비밀번호
            </label>
            <input className={`${style.PW_input}`} name = "password" value={password} placeholder='비밀번호 입력' />
        </div>
        <div className={`${style.PW2_start}`}>
            <label>
                비밀번호 확인
            </label>
            <input className={`${style.PW2_input}`} name = "password2" value={passwordConfirm} placeholder='비밀번호 한번 더 입력' />
        </div>

        <div className={`${style.EM_start}`}>
            <label>
                이메일
            </label>
            <input className={`${style.EM_input}`} name = "email" value={email} placeholder='이메일 입력' />
            
        </div>

        <div className={`${style.PN_start}`}>
            <label>
                휴대폰 번호 
            </label>
            <input className={`${style.PN_input}`} name = "phone" value={phone} placeholder='숫자를 입력하세요' />
        </div>

        <div className={`${style.Sex_start}`}>
            <label >
                생년월일 
            </label>
            <input type="text" value={birth} placeholder='성별을 입력해주세요' />
        </div>

        <button className={`${style.join_btn}`}>가입하기</button>
        <button>돌아가기</button>
        
        </form>
        </>
  )
}
