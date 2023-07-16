import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function App() {
  
  const [second, setSecond]=useState(0);
  const [minute, setMinute]=useState(0);
  const [run,setRun]=useState(false)

  
  useEffect(()=>{
    let timer=null;
  if(run){
    timer= setInterval(()=>{
      setSecond(second+1);
    //alert('done');
      if (second===60) {
        setMinute(minute+1);
        setSecond(0);
      }
    },1000)
  }else{
    clearInterval(timer);
  }
    
    return()=>clearInterval(timer);
  });
 
  const startTimer =()=>{
setRun(true);
  }
const restTimer=()=>{
  setSecond(0);
  setMinute(0);
  setRun(false);
}
const stopTimer=()=>{
  setRun(false);
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

         <button className={!run? 'btn btn-outline-success me-2' : 'btn btn-outline-success me-2 disabled'}  onClick={startTimer}>Start</button>
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
