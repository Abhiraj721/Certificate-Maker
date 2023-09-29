import React from 'react'
import "./Certificate.css"
import border from "./border.png"
export default function Certificate({ name, subtitle, date, Signature }) {
  return (
 <div className='playground'>
 <h1 className='certificatehead'>Certificate</h1>
     <h4 className='samplehead'>this certificate is presented to</h4>
        <h4 className='namehead'>{name}</h4>
 <img className='certificateimg' src="https://media.istockphoto.com/id/124566547/vector/large-certificate-diploma.jpg?s=612x612&w=0&k=20&c=gBy8-WW05cQcHqULj4Q0xIfPj7QBTFrIvewgllSviYg=" alt="" />
  <img className='borderdivide' src={border} alt="" />
<p className='subtitletext'>{subtitle}</p>
<p className='datetext'>Date:{date}</p>
<p className='signaturetext'>SIGNATURE:  <span className='usersign'>{Signature}</span> </p>
 </div>
  )
}
