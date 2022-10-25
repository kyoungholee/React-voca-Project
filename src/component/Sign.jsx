import React from 'react'
import style from '../Sign.module.css';

export default function Sign() {

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
            <input className={`${style.ID_input}`} type="text" placeholder='아이디 입력 ' />
        </div>


        <div className={`${style.PW_start}`}>
            <label>
                비밀번호
            </label>
            <input className={`${style.PW_input}`} type="text" placeholder='비밀번호 입력' />
        </div>
        <div className={`${style.PW2_start}`}>
            <label>
                비밀번호 확인
            </label>
            <input className={`${style.PW2_input}`} type="text" placeholder='비밀번호 한번 더 입력' />
        </div>

        <div className={`${style.EM_start}`}>
            <label>
                이메일
            </label>
            <input className={`${style.EM_input}`} type="text" placeholder='이메일 입력' />
            
        </div>

        <div className={`${style.PN_start}`}>
            <label>
                휴대폰 번호 
            </label>
            <input className={`${style.PN_input}`} type="text" placeholder='숫자를 입력하세요' />
        </div>

        <div className={`${style.Sex_start}`}>
            <label >
                성별 
            </label>
            <input type="text" placeholder='성별을 입력해주세요' />
        </div>

        <button>가입하기</button>
        <button>돌아가기</button>
        
        </form>
        </>
  )
}
