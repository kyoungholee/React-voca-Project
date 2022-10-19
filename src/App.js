//import Hello from './component/Hello';
//import Welcome from './component/Welcome';
//import styles from "./App.module.css"
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';


function App() {

  // const naver = {
  //   name : "네이버",
  //   url : "www.naver.com"

  // }


  //App.js에서  Hello 컴포넌트에게 age에 속성값을 전달함 
  return (
    <BrowserRouter>
      <div className="App">

      <Header />

      <Routes>
        <Route exact path='/' element = {<DayList />}>
        </Route>

        <Route path='/day/:day' element = {<Day />}>
        </Route>

        <Route path='/create_word' element = {<CreateWord />}>
        </Route>

        <Route path='/create_day' element = {<CreateDay />}>
        </Route>

        <Route element = {<EmptyPage />}>
        </Route>

      </Routes>

      <footer style={
        {
          color : 'red'
        }
      }>
        밑바닥!!</footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
 