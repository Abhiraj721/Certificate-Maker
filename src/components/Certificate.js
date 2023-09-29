import React, { useRef } from 'react'
import "./Certificate.css"
import border from "./border.png"
import html2canvas from "html2canvas";

export default function Certificate({frameurl, name, subtitle, date, Signature }) {
  const divToDownloadRef = useRef(null);
  const handleDownload = () => {
    html2canvas(divToDownloadRef.current, {
      allowTaint: true,
      backgroundColor: null,
      useCORS: true,
    }).then((canvas) => {
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "Chat.png";
      link.href = dataURL;
      link.click();
    });
  };
  return (
    <div className='playground' ref={divToDownloadRef}>
      <h1 className='certificatehead'>Certificate</h1>
      <h4 className='samplehead'>this certificate is presented to</h4>
      <h4 className='namehead'>{name}</h4>
      <img className='certificateimg' src={frameurl} alt="" />
     
      <p className='subtitletext'>{subtitle}</p>
      <p className='datetext'>Date:{date}</p>
      <p className='signaturetext'>SIGNATURE:  <span className='usersign'>{Signature}</span> </p>
      
      <button className='button-85 downloadbtn' onClick={() => handleDownload()}>Download</button>
    </div>
  )
}
