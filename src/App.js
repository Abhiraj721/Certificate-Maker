import logo from './logo.svg';
import './App.css';
import Inputs from './components/Inputs';
import { useState } from 'react';
import Certificate from './components/Certificate';

function App() {
  const [name,Setname]=useState("s");
  const [subtitle,Setsubtitle]=useState("");
  const [date,Setdate]=useState("");
  const [Signature,Setsignature]=useState("");

  return (
    <div className="App">
      <div className="row">
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <Inputs
       name={name}
       Setname={Setname}
       subtitle={subtitle}
       Setsubtitle={Setsubtitle}
       date={date}
       Setdate={Setdate}
       Signature={Signature}
       Setsignature={Setsignature}
      />
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <Certificate
        name={name}
        subtitle={subtitle}
        date={date}
        Signature={Signature}
      />
        </div>
      </div>

    </div>
  );
}

export default App;
