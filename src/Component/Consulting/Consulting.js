import React from 'react'
import "../Solution/Solution.css"
import { useTranslation } from "react-i18next";

function Consulting() {
  const {t} = useTranslation();
  const { line6 ,Consulting } = t("description");

  return (
  <>

 <main>
  <div className='MainHome'>

       <section>
           <div className='Thirdsectionsolution'>
             <div>
              <div className='aboutus'>{Consulting.head}</div>
              <br />
              <div className='Solutoin'>{Consulting.sub1}</div>
             </div>
             <br />
             <br />
  
          
       
             <div className='solutions'>
             <div className='solinner1 ead'>
                <div className='soluimga'><img src='/images/db.svg' /></div>
                <div className='dep'>{Consulting.sub2}</div>
                <br />
                <div className='solutininner'>{Consulting.sub3}</div>
                <br />
                <div className='solutininner'>{Consulting.sub4}</div>
                <br />
                <br />
                <br />
             
            
              </div>
              <div className='solinner1 fuh'>
                <div className='soluimga'><img src='/images/os.svg' /></div>
                <div className='dep'>{Consulting.sub5}</div>
                <br />
                <div className='solutininner'>{Consulting.sub6}</div>
                <br />
                <div className='solutininner'>{Consulting.sub7}</div>
                <br />
                <br />
                <br />
              </div>
              <div className='solinner3 fuh'>
                <div className='soluimga'><img src='/images/td.svg' /></div>
                <div className='dep'>{Consulting.sub8}</div>
                <br />
                <div className='solutininner'>{Consulting.sub9}</div>
                <br />
                <div className='solutininner'>{Consulting.sub10}</div>
                <br />
                <br />
                <br />
              </div>
              </div>
     <br />
     <br />

             <div className='ghjb'>
              <div className='seeourprocess'>{Consulting.sub11}</div>
             </div>
           </div>
        </section> 
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

export default Consulting
