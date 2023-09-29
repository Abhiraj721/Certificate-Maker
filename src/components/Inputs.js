import React from 'react'
import "../App.css"
export default function Inputs({ name, Setname, subtitle, Setsubtitle, date, Setdate, Signature, Setsignature }) {
  return (

    <div>
            {console.log(name)}
    <div className='form'>
    <label htmlFor="name">Name</label>
    <input
  className='name'
  type="text"
  id="name"
  name="name"
  value={name}
  onChange={(e) => Setname(e.target.value)}
/>

<label htmlFor="subtitle">Subtitle</label>
<textarea
  className='subtitle'
  id="subtitle"
  name="subtitle"
  value={subtitle}
  onChange={(e) => Setsubtitle(e.target.value)}
></textarea>

<label htmlFor="date">Date</label>
<input
  type="text"
  id="date"
  name="date"
  value={date}
  onChange={(e) => Setdate(e.target.value)}
/>

<label htmlFor="signature">Signature</label>
<input
  className='signature'
  type="text"
  id="signature"
  name="signature"
  value={Signature}
  onChange={(e) => Setsignature(e.target.value)}
/>
    <button className='button-85'>Submit</button>
    
    </div>

    </div>
  )
}
