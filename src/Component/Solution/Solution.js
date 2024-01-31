import React from 'react'
import "./Solution.css"
import { useTranslation } from "react-i18next";

function Solution() {
  const {t} = useTranslation();
  const { line6 ,Solution } = t("description");

  return (
  <>

 <main>
  <div className='MainHome'>

       <section>
           <div className='Thirdsectionsolution'>
             <div>
              <div className='aboutus'>{Solution.head}</div>
              <br />
              <div className='Solutoin'>{Solution.sub1}</div>
             </div>
             <br />
             <br />
  
             <div className='solutions'>
              <div className='solinner1 fuh1'>
                <div className='soluimga'><img src='/images/uiux.svg' /></div>
                <div className='dep'>{Solution.sub2}</div>
                <br />
                <div className='solutininner'>{Solution.sub3}</div>
                <br />
                <div className='solutininner'>{Solution.sub4}</div>
                <br />
                <br />
              </div>
              <div className='solinner1 fuh'>
                <div className='soluimga'><img src='/images/sd.svg' /></div>
                <div className='dep'>{Solution.sub5}</div>
                <br />
                <div className='solutininner'>{Solution.sub6}</div>
                <br />
                <div className='solutininner'>{Solution.sub7}</div>
                <br />
                <br />
              </div>
              <div className='solinner3 fuh'>
                <div className='soluimga'><img src='/images/md.svg' /></div>
                <div className='dep'>{Solution.sub8}</div>
                <br />
                <div className='solutininner'>{Solution.sub9}</div>
                <br />
                <div className='solutininner'>{Solution.sub10}</div>
                <br />
                <br />
              </div>
              <div className='solinner2 guh'>
                <div className='soluimga'><img src='/images/wd.svg' /></div>
                <div className='dep'>{Solution.sub11}</div>
                <br />
                <div className='solutininner'>{Solution.sub12}</div>
                <br />
                <div className='solutininner'>{Solution.sub13}</div>
                <br />
                <br />
                {/* <br / */}
              </div>
              <div className='solinner2 guh fuh'>
                <div className='soluimga'><img src='/images/er.svg' /></div>
                <div className='dep'>{Solution.sub14}</div>
                <br />
                <div className='solutininner'>{Solution.sub15}</div>
                <br />
                <div className='solutininner'>{Solution.sub16}</div>
                <br />
                <br />
              </div>
              <div className='solinner guh fuh'>
                <div className='soluimga'><img src='/images/cr.svg' /></div>
                <div className='dep'>{Solution.sub17}</div>
                <br />
                <div className='solutininner'>{Solution.sub18}</div>
                <br />
                <div className='solutininner'>{Solution.sub19}</div>
                <br />
                <br />
              </div>
             </div>
          
           
        
             <div className='ghjb'>
              <div className='seeourprocess'>{Solution.sub20}</div>
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

export default Solution
