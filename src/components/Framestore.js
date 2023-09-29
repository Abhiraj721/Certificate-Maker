import React from 'react';
import "./Framestore.css"
const ScrollableWindow = ({Setframeurl}) => {
    const framearr = [
        "https://media.istockphoto.com/id/1156086610/vector/blue-certificate-of-appreciation-border.jpg?s=612x612&w=0&k=20&c=VluNq0DOcO2fVHZiBM6xvb3Y5ctXxG9AFkrbCV6sYf8=",
        "https://media.istockphoto.com/id/1194386636/vector/blank-certificate-border-ready-add-text-in-gold-color.jpg?s=612x612&w=0&k=20&c=YnagFprbEWJmKh4k5T7b2DZShlGgmAWASKEUyZc-mWk=",
        "https://media.istockphoto.com/id/1193997957/vector/blank-certificate-border-ready-add-text-in-gold-color.jpg?s=612x612&w=0&k=20&c=hpXl_hLrWCTwVyGa2t3OyCo9JFIQBdSdOvLmRKS9Yuo=",
        "https://media.istockphoto.com/id/990795030/vector/china-border-frame.jpg?s=612x612&w=0&k=20&c=_1gKF1XdkYp-N4_Fe0VfhRxI9A5N7M-oNzOXCSgXyFU=",
        "https://media.istockphoto.com/id/1313752746/vector/certificate-of-template-chinese-pattern-background-with-frame-set-sail-champagne-colors.jpg?s=612x612&w=0&k=20&c=a34-EqubBdrZmQNTaIOsjF6UWDtgDZGJ3ib43QwXVrM=",
        "https://media.istockphoto.com/id/172212170/photo/blank-certificate.jpg?s=612x612&w=0&k=20&c=P5Mr8to_67Qas2DUcXDdW6-i1jKWErpxyWV_SsedlnE=",
        "https://media.istockphoto.com/id/172209024/photo/certificate-border.jpg?s=612x612&w=0&k=20&c=Moi-cmXdI1z64-kJrDM71OSLF3hplkYRX1-_1kHdr2s=",
        "https://media.istockphoto.com/id/1354015349/vector/old-vintage-frame-retro-floral-rectangle-decorative-antique-museum-picture-border-or-deco.jpg?s=612x612&w=0&k=20&c=TACLopfR8ziBdtHI1QM9QDmnPtys1GM9pGDd_Dvvrm4=",
        "https://media.istockphoto.com/id/1291893960/vector/template-a4-with-border-frame-colorful-mock-up-a4-for-poster-banner-background-white-copy.jpg?s=612x612&w=0&k=20&c=l964Z_K6VOpwx1sAorHLuxijVZLkN1NjAwV3Zrk_0_I=",
        "https://media.istockphoto.com/id/1405479967/vector/blue-abstract-certificate-frame-with-floral-style.jpg?s=612x612&w=0&k=20&c=kZikacV5YBtNXTMoLpWE4alLOK3xkzxYNibpJ6h2G_Q=",
        "https://media.istockphoto.com/id/141314875/vector/frame.jpg?s=612x612&w=0&k=20&c=h70oOfPRp7C3femTS5qg2Esjb7MLOcICYuPM6hcFgYA=",
        "https://media.istockphoto.com/id/1267568176/vector/certificate-border-deep-red.jpg?s=612x612&w=0&k=20&c=XAZLpFYunfmZP-crPIlj-vNK4UFYmD1VDjph8DMFDj8=",
        "https://media.istockphoto.com/id/181894180/photo/blank-card.jpg?s=612x612&w=0&k=20&c=OYCYs6SIGIPOVSBtHTMjzCxZ0X5KbMsve3qkDZiTGT4=",
        "https://media.istockphoto.com/id/1152127016/vector/decorative-border-and-frame-template-in-square-shape-vintage-frame-design-for-certificate.jpg?s=612x612&w=0&k=20&c=7ok8ZtztYjQuNFqHB36FIcGZm35QIiCOeSq392ipYzs=",
        "https://media.istockphoto.com/id/1328146086/vector/frame-enclosure.jpg?s=612x612&w=0&k=20&c=-LPncsskCWmU_PsYlYVBvH_JcFQ5XGzlkVFXkyT-Eo0=",
        "https://media.istockphoto.com/id/1400787957/vector/simple-linear-frame-border-vintage-isolated-simple-vector-illustration.jpg?s=612x612&w=0&k=20&c=iVVFwnpdH2EHnM0MGEaiFg8GfaNm_udiy5K6r61wuDg=",
        "https://media.istockphoto.com/id/466725953/vector/penmanship-of-a-curly-baroque-black-frame.jpg?s=612x612&w=0&k=20&c=61i8tOoM-93kEBFV3Z6CGbdTWM6iibRChbt_ChiA7h4=",
      ];
      
      
  const containerStyle = {
    width: '80%',
    height: '300px', // Adjust the height as per your requirement
    overflowY: 'scroll',
    border: '1px solid #ccc',
  };

  const contentStyle = {
    padding: '20px',
  };

  return (
    <div className='framestore' style={containerStyle}>
                <button className='crossbtn' onClick={()=>{
            document.querySelector(".framestore").style.display="none";
        }}> <img src="data:image/png;base64,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" alt="" /> </button>
        <p className='framestorehead'>Select Your Fav Frame</p>
      <div style={contentStyle}>
        <div className="row">
        {/* Your content goes here */}
        {/* This content will be scrollable inside the container */}
      {
        framearr.map((imgurl,index)=>{
            return <div className='col-lg-4 col-md-6 col-sm-12' onClick={()=>{
                Setframeurl(imgurl);
            }}><img className='frameimg' src={imgurl} alt="" /></div>
        })
      }
      </div>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default ScrollableWindow;
