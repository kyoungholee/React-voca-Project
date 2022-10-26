import React, { useState } from 'react'
import style from '../Sign.module.css';

export default function Sign() {
    
    //회원가입에 상태 변화 
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");

    //회원가입 오류 변화
    const [idMessage, setIdMessage] = useState("");
    const [nameMessage, setNameMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");
    const [birthMessage, setBirthMessage] = useState("");

    //유효성 검사 
    const [isId, setIsId] = React.useState(false);
    const [isName, setIsName] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
    const [isEmail, setIsEmail] = React.useState(false);
    const [isPhone, setIsPhone] = React.useState(false);
    const [isBirth, setIsBirth] = React.useState(false);
    


    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onChangeId = (e) => {
        const currentId = e.target.value; //콘솔창에 값 기록
        setId(currentId);
        const idRegExp = /^[a-zA-z0-9]{4,12}$/; //정규식

        if(!idRegExp.test(currentId)) {
            setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!!");
            setIsId(false);
        } else {
            setIdMessage("사용가능한 아이디 입니다");
            setIsId(true);
        }
    };
    
    const onChangeName = (e) => {
        const currentName = e.target.value;
        setName(currentName);

        if(currentName.length < 2 || currentName.length > 5) {
            setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요 ");
            setIsName(false);
        }else {
            setNameMessage("사용가능한 아이디 입니다.");
            setIsName(true);
        }
    }

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);

        const passwordRegExp = 
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

        if(!passwordRegExp.test(currentPassword)) {
            setPasswordMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.!"
            );
            setIsPassword(false);
        }else {
            setPasswordMessage("안전한 비밀번호 입니다.");
            setIsPassword(true);
        }
    };

    const onChangePasswordConfirm = (e) => {
        const currentPasswordConfirm = e.target.value;
        setPasswordConfirm(currentPasswordConfirm);
        if(password !== currentPasswordConfirm) {
            setPasswordConfirmMessage("비밀번호가 똑같지 않습니다.");
            setIsPasswordConfirm(false);
        }else {
            setPasswordConfirmMessage("똑같은 비밀번호를 입력해주세요");
            setIsPasswordConfirm(true);
        }
    };

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp =
            /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

        if(!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다.");
            setIsEmail(false);
        }else {
            setEmailMessage("사용 가능한 이메일 입니다");
            setIsEmail(true);
        }
    };

    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("올바른 형식이 아닙니다!");
            setIsPhone(false);
        } else {
            setPhoneMessage("사용 가능한 번호입니다:-)");
            setIsPhone(true);
        }
    };

    

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
            <input className={`${style.ID_input}`} name = "userName" value={id} 
            placeholder='아이디를 입력해주세요' onChange={onChangeId} />
        </div>

        <div className={`${style.ID_start}`}>
            <label>
                이름
            </label>
            <input className={`${style.ID_input}`} name = "NickName" value={name} 
            placeholder='이름을 입력해주세요' onChange = {onChangeName} />
        </div>


        <div className={`${style.PW_start}`}>
            <label>
                비밀번호
            </label>
            <input className={`${style.PW_input}`} name = "password" value={password}
            placeholder='비밀번호 입력' onChange={onChangePassword} />
        </div>
        <div className={`${style.PW2_start}`}>
            <label>
                비밀번호 확인
            </label>
            <input className={`${style.PW2_input}`} name = "password2" value={passwordConfirm}
            placeholder='비밀번호 한번 더 입력' onChange={onChangePasswordConfirm} />
        </div>

        <div className={`${style.EM_start}`}>
            <label>
                이메일
            </label>
            <input className={`${style.EM_input}`} name = "email" value={email} 
            placeholder='이메일 입력' onChange={onChangeEmail} />
            
        </div>

        <div className={`${style.PN_start}`}>
            <label>
                휴대폰 번호 
            </label>
            <input className={`${style.PN_input}`} name = "phone" value={phone} 
            placeholder='숫자를 입력하세요' />
        </div>

        <div className={`${style.Sex_start}`}>
            <label >
                생년월일 
            </label>
            <input type="text" value={birth} 
            placeholder='성별을 입력해주세요' />
        </div>

        <button className={`${style.join_btn}`}>가입하기</button>
        <button>돌아가기</button>
        
        </form>
        </>
  )
}
