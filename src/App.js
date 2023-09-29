
import './App.css';
import Inputs from './components/Inputs';
import { useEffect, useState } from 'react';
import Certificate from './components/Certificate';
import Framestore from "./components/Framestore"
function App() {
  const [name,Setname]=useState("Your Name");
  const [subtitle,Setsubtitle]=useState("subtitle here");
  const [date,Setdate]=useState("");
  const [Signature,Setsignature]=useState("Your Sign");
  const [frameurl,Setframeurl]=useState("https://media.istockphoto.com/id/124566547/vector/large-certificate-diploma.jpg?s=612x612&w=0&k=20&c=gBy8-WW05cQcHqULj4Q0xIfPj7QBTFrIvewgllSviYg=");
  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
   Setdate(formattedDate);
  }, []);
  return (
    <div className="App">
      <center>  <Framestore Setframeurl={Setframeurl}></Framestore></center> 
      <div className="row">
        <div className='col-lg-4 col-md-12 col-sm-12'>
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
        <div className='col-lg-8 col-md-12 col-sm-12'>
        <Certificate
        frameurl={frameurl}
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
