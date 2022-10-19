//단어들이 나오는 페이지
import React from "react";
//import dummy from "../db/data.json";
//url에 포함된 값을 얻기 위해선 useParms를 사용
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {

    //const day = 1;

    const a = useParams();
    const day = a.day;
    console.log(a);

    //const wordList = dummy.words.filter(wordes => (wordes.day === Number(day)));

    const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
    <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((wordes) => (
            <Word wordes = {wordes} key = {wordes.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
