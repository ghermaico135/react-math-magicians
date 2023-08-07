/* eslint-disable */
import { useState } from 'react';
import Buttons from './Button';
import './button.css';

function Calculator () {
  const  [obj ,setObj] = useState({});
  return(
    <div className="container">
    <h1 className="title">Lets do some math!!</h1>
    <div className="grid-container">
      {/* <DisplayInput obj={obj} /> */}
      <Buttons name="AC" obj={obj} setObj={setObj} />
      <Buttons name="+/-" obj={obj} setObj={setObj} />
      <Buttons name="%" obj={obj} setObj={setObj} />
      <Buttons name="/" obj={obj} setObj={setObj} />
      <Buttons name="7" obj={obj} setObj={setObj} />
      <Buttons name="8" obj={obj} setObj={setObj} />
      <Buttons name="9" obj={obj} setObj={setObj} />
      <Buttons name="x" obj={obj} setObj={setObj} />
      <Buttons name="4" obj={obj} setObj={setObj} />
      <Buttons name="5" obj={obj} setObj={setObj} />
      <Buttons name="6" obj={obj} setObj={setObj} />
      <Buttons name="-" obj={obj} setObj={setObj} />
      <Buttons name="1" obj={obj} setObj={setObj} />
      <Buttons name="2" obj={obj} setObj={setObj} />
      <Buttons name="3" obj={obj} setObj={setObj} />
      <Buttons name="+" obj={obj} setObj={setObj} />
      <Buttons name="0" obj={obj} setObj={setObj} />
      <Buttons name="." obj={obj} setObj={setObj} />
      <Buttons name="=" obj={obj} setObj={setObj} />
    </div>
  
  </div>
  )
 
  }

export default Calculator;
