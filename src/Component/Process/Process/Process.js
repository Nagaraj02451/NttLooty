import React from 'react'
import '../Process/Process.css'
import { useTranslation } from "react-i18next";

const Process = () => {
     const {t} = useTranslation();
     const { line6 ,process } = t("description");
   
  return (
    <>
    <main>
       <div className='pro1'>
           

       <div className='pro2'>
           <div className='pro21'>
            <img src='/images/pro1.png'></img>
            </div>
       </div>
      
       <div className='pro3'>
           <div className='pro31'>Our Process : For Solutions</div>
           <div className='pro32'>Your Journey, Our Expertise: Seamless from Start to Finish</div>
           <div className='pro33' id='pro33'><img src='/images/pro3.svg'></img></div>
           <div className='pro33' id='pro34'><img src='/images/pro4.png'></img></div>
       </div>

       <div className='pro4'>
       <div className='pro41'>
            <img src='/images/pro2.png'></img>
            </div>
       </div>


       <div className='pro5'>
       <div className='pro31'>Our Process : For Solutions</div>

       </div>



       <div className='pro6'>
       <div className='pro61' id='pro33'><img src='/images/pro31.svg'></img></div>
       <div className='pro61' id='pro34'><img src='/images/pro4.png'></img></div>


       </div>


       <div className='pro7'>
            <div className='pro71'>Embark on this transformative journey with us, where "Navigating Digital Horizons, Igniting Impact" is not just a tagline but a promise delivered through meticulous analysis, strategic planning, and dynamic implementation.</div>
       </div>


       </div>
  </main>
  <div className='letstalk'>
 <a href="#" className="shutter-out-horizontal"><div className='vhgv'>{line6.learn}<p className='cyfhv'><img src='/images/arrow.png' /></p></div></a> 
 </div>
  </>
  )
}

export default Process