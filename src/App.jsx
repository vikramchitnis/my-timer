import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [second, setSecond]=useState('0');
  const [minute, setMinute]=useState('0')

  var timer=null;
  useEffect=(()=>{
  
    timer= setInterval(()=>{
      setSecond(second+1);
    
      if (second===59) {
        setMinute(minute+1);
        second(0);
      }
    },1000)
    return()=>clearInterval(timer);
  });
 
const restTimer=()=>{
  setSecond(0);
  setMinute(0);
}
const stopTimer=()=>{
  clearInterval(timer);
}

return (
  <>
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto my-4">
          <h3 className='text-center'>My Timer</h3>
          <div className="card p-4 text-center bg-success text-white my-3">
            <h3><span>{minute<10? "0"+minute:minute}:{second<10? "0"+second:second}</span></h3>
          </div>
          <div className='my-4 text-center'>

            
            <button className="btn btn-outline-primary me-2" onClick={stopTimer}>Stop</button>
            <button className="btn btn-outline-danger me-2" onClick={restTimer} >Reset</button>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default App;
