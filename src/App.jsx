import { useState } from 'react';
import './App.css'
import Button from './Button'
import Profile from './Profile'
import Board from './Board';


function App() {

  let [count, setCount] = useState(0);

  function Increment(){
    setCount(count+1);
  }

  

  return (
    <>
      {/* <Profile/>      */}
      {/* <Counter/> */}
      {/* <Button count ={count} action={Increment}/> */}
      {/* <Button count ={count} action={Increment}/> */}

      <Board/>

    </>
  )
}

export default App
