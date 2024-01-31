import React from 'react'
import "../LandingPage/Home.css"
import i1 from "./assert/i1.svg"
import i2 from "./assert/i2.svg"
import i3 from "./assert/i3.svg"
import i4 from "./assert/i4.svg"
import i5 from "./assert/i5.svg"
import i6 from "./assert/i6.svg"
import i7 from "./assert/i7.svg"
import i8 from "./assert/i8.svg"
import i9 from "./assert/i9.svg"
import i10 from "./assert/i10.svg"
import i11 from "./assert/i11.svg"
import i12 from "./assert/i12.svg"
import i13 from "./assert/i13.svg"
import i14 from "./assert/i14.svg"
import i15 from "./assert/i15.svg"
import i16 from "./assert/i16.svg"
import i17 from "./assert/i17.svg"
import i18 from "./assert/i18.svg"
import { useTranslation } from "react-i18next";


function Industry() {
    const {t} = useTranslation();
    const { line6 ,Industries } = t("description");

  const datas = [
    {
         image : i1,
         name : Industries.indus1
    },
    {
         image : i2,
         name :  Industries.indus2
    },
    {
         image : i3,
         name :  Industries.indus3
    },
    {
         image : i4,
         name :  Industries.indus4
    },
    {
         image :i5,
         name :  Industries.indus5
    },
    {
         image : i6,
         name :  Industries.indus6
    },
    {
         image : i7,
         name :  Industries.indus7
    },
    {
         image : i8,
         name :  Industries.indus8
    },
    {
         image : i9,
         name :  Industries.indus9
    },
   
    {
     image : i10,
     name :  Industries.indus10
},


]


  const seconddata = [
     {
          image :i11,
          name :  Industries.indus11
     },
     {
          image : i12,
          name :  Industries.indus12
     },
     {
          image : i13,
          name :  Industries.indus13
     },
     {
          image : i14,
          name :  Industries.indus14
     },
]

const thirddata = [
   
     {
          image : i15,
          name :  Industries.indus15
     },
     {
          image : i16,
          name :  Industries.indus16
     },

]

const fouthdata = [
     {
          image : i17,
          name :  Industries.indus17
     },
     {
          image :i18,
          name :  Industries.indus18
     },
]

  return (
<>
<main>
  <div className='MainHome'>

       <section>
           <div className='insutry'>
            <div className='industryinner'>

        <div className='aboutus'>{Industries.head}</div>
        </div>
    <br />
      
                <div className='arewhoinsus'>
                  <div className='hgv' >{Industries.sub1}</div>
                  <div className='areinner' > <span id='ino'>{Industries.sub2}</span>
                  <br />
                  <br />
                  <div>{Industries.sub3}</div>
                  </div>
                </div>
                <div className='innerline'></div>
                <div className='arewhoinsus '>
                  <div className='estgfer hgv'>{Industries.sub4}</div>
                  <div className='areinner' > <span id='ino'>{Industries.sub5}</span>
                  <br />
                  <br />
                  <div>{Industries.sub6}</div>
                  </div>
                </div>
                <div className='innerline'></div>
              
                <div className='arewhoinsus '>
                  <div className='estgfer hgv'>{Industries.sub7}</div>
                  <div className='areinner' > <span id='ino'>{Industries.sub8}</span>
                  <br />
                  <br />
                  <div>{Industries.sub9}</div>
                  </div>
                </div>
           
                <div className='innerline'></div>
           </div>
        </section> 
       
  </div>
 </main>   
 <main>
  <div className='MainHome'>
  <br />

       <section>
           <div className='insutry'>
            <div className='industryinner'>

        <div className='aboutus'>{Industries.sub10}</div>
        </div>
    <br />
    <br />
    <br />
    <br />

<div className='industrydatas'>
    
    {
        datas.map((iteams)=>{
            return(
                <>
<div>
    <div className='induatryimagedata'><img src={iteams.image} /></div>
    <br />
    <div className='abouonce'>{iteams.name}</div>
</div>
                </>
            )
        })
    }
    
</div>
<br />
    <br />
    <br />
    <br />
<div className='industrydatas'>
    
    {
        seconddata.map((iteams)=>{
            return(
                <>
<div>
    <div className='induatryimagedata'><img src={iteams.image} /></div>
    <br />
    <div className='abouonce'>{iteams.name}</div>
</div>
                </>
            )
        })
    }
    
</div>
<br />
    <br />
    <br />
    <br />

<div className='industrydatas'>
    
    {
        thirddata.map((iteams)=>{
            return(
                <>
<div>
    <div className='induatryimagedata'><img src={iteams.image} /></div>
    <br />
    <div className='abouonce'>{iteams.name}</div>
</div>
                </>
            )
        })
    }
    
</div>
<br />
    <br />
    <br />
  
<div className='industrydatas'>
    
    {
        fouthdata.map((iteams)=>{
            return(
                <>
<div>
    <div className='induatryimagedata'><img src={iteams.image} /></div>
    <br />
    <div className='abouonce'>{iteams.name}</div>
</div>
                </>
            )
        })
    }
    
</div>

             
           </div>
        </section> 
        <br />
  <br />
  <br />

  </div>

 </main>   
 <div className='letstalk'>
 <a href="#" className="shutter-out-horizontal"><div className='vhgv'>{line6.learn}<p className='cyfhv'><img src='/images/arrow.png' /></p></div></a> 
 </div>
</>
  )
}

export default Industry
