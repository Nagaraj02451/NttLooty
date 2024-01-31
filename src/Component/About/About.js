import React from 'react'
import "./About.css"
import { useTranslation } from "react-i18next";

function About() {
  const {t} = useTranslation();
  const { line6 ,About } = t("description");

  return (
<>
<main>
  <div className='MainHome'>

       <section>
        <div className='Mainabout'>
         <div className='aboutus'>{About.head}</div>
         <br />
         <div className='abouonce'>{About.sub1}</div>
         <br />
         <div className='abouonce'>{About.sub2}</div>
         <br />
         <div className='abouonce'>{About.sub3}</div>
         <br />
         <br />
         <br />
         <div className='brandAbout'>{About.sub4}</div>
         <br />
         <div className='abouonce'>{About.sub5}</div>
         
         <br />
         <div className='aboutbrand'>
            <div className='vghb'> 
            <div className='aboutimage'><img src='/images/logo.png' /></div>
            <br />
            <div className='cghfg sideabout'>{About.sub6}</div>
            <br />
          
            </div>
            <div className='tdfg'> 
        <div className='hggyfug'>
        <div className='aboutimahe2'><img src='/images/logo.png' /></div>
            <br />
            <div className='sideabout'>{About.sub7}</div>
            <br />
        </div>
            </div>
           
            <div className='sahgrfset'>
                <div className='hggyfug'>
            <div className='aboutimage3'><img src='/images/b3.png' /></div>
            <br />
       
            <div className='sideabout'>{About.sub8}</div>
            <br />
            
            </div>
            </div>
         </div>
<br />
<br />
<br />
<br />


         <div className='ghj' >
            <div className='divin'>{About.sub9}</div>
         </div>
        </div>
        </section> 
       <br />


   
  </div>
 </main>
 <div className='letstalk'>
 <a href="#" className="shutter-out-horizontal"><div className='vhgv'>{line6.learn}<p className='cyfhv'><img src='/images/arrow.png' /></p></div></a> 
 </div>
</>
  )
}

export default About
