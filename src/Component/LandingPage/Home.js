import React, { useEffect } from 'react'
import "./Home.css"
import { useTranslation } from "react-i18next";

function Home() {
  const {t} = useTranslation();
  const {line1, line2 , line3 , line4 , line5 , line6} = t("description");

  const { i18n } = useTranslation();

  useEffect(() => {
      document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  return (
    <>
 <main>
  <div className='MainHome'>

       <section>
        <div>
          <div className='Title'>
          <div className='titleinner'>{line2.head}</div>
          </div>
          <div className='HomeMain'>
            <div className='Homeinnerfing'>
             <div>
             <div className='sideinner' id='cthfgj'>{line2.sub1}</div>
              <div className='siderinnnertwo ' id='huhum'>
                <div>{line2.SubTwo.One}</div>
                <div>{line2.SubTwo.Two}</div>
                <div>{line2.SubTwo.Three}</div>
                <div>{line2.SubTwo.Four}</div>
                <div><span className='sevenko'>7%</span>{line2.SubTwo.Five}</div>
                <div>{line2.SubTwo.Six}</div>
                <div>{line2.SubTwo.Seven}</div>
                <div>{line2.SubTwo.Eight}</div>
              </div>
             </div>
              <div className='siderinnnertwo ' id='hiff'>
              {line2.SubTwo.One} {line2.SubTwo.Two} {line2.SubTwo.Three} {line2.SubTwo.Four} <span className='sevenko'>7%</span> {line2.SubTwo.Five} {line2.SubTwo.Six} {line2.SubTwo.Seven} {line2.SubTwo.Eight}
              </div>
              <div className='lineop jygjgv'></div>
            </div>
            <div  className='Homeinnerfingtwo' >
             <div className='Homtwoin'>
             <div className='sideinner'>{line2.sub2}</div>
              <div className='siderinnnertwo ' id='huhum'>
                <div>{line2.Subthree.One}</div>
                <div><span className='sevenko'>63%</span> {line2.Subthree.Two}</div>
                <div>{line2.Subthree.Three}</div>
                <div>{line2.Subthree.Four}</div>
                <div>{line2.Subthree.Five} </div>
                <div>{line2.Subthree.six}</div>
                <div>{line2.Subthree.Seven}</div>
              </div>
              <div className='siderinnnertwo ' id='hiff'>
              {line2.Subthree.One} <span className='sevenko'>63%</span> {line2.Subthree.Two} {line2.Subthree.Three} {line2.Subthree.Four} {line2.Subthree.Five} {line2.Subthree.Six} {line2.Subthree.Seven}
              </div>
             </div>
            </div>
            <div  className='HomeinnerfingThree' >
              <div className='lineop'></div>
              <div className='vgfh '>
              <div className='sideinner'>{line2.sub3}</div>
              <div className='siderinnnertwo ' id='huhum'>
                <div>{line2.SubFour.One}</div>
                <div>{line2.SubFour.Two}</div>
                <div>{line2.SubFour.Three}</div>
                <div>{line2.SubFour.Four} </div>
                <div><span className='sevenko'>27%</span></div>
                <div className='visi'>visi</div>
                <div className='visi'>visi</div>
                <div className='visi'>visi</div>
              </div>
              <div className='siderinnnertwo ' id='hiff'>{line2.SubFour.One} {line2.SubFour.Two} {line2.SubFour.Three} {line2.SubFour.Four} <span className='sevenko'>27%</span></div>
              </div>
            </div>
          </div>
        </div>
        </section> 
       
  </div>
 </main>

 <div className='lineheadTwoHome'>
                            <div className='lineinterhome'></div>
                        </div>

<main>
  <div className='MainHome'>

       <section>
           <div className='Secondsection'>
                <div className='arewho'>
                  <div className='ques' ><span>{line3.head1}</span>{line3.Question1}</div>
                  <div className='areinner'>{line3.inner1.one}
                    <span> {line3.inner1.two}</span> {line3.inner1.three} <span>{line3.inner1.four}</span> {line3.inner1.five} <span>{line3.inner1.six}</span></div>
                </div>
                <div className='innerline'></div>
                <div className='arewho'>
                  <div className='sene'><span>{line3.head2}</span>{line3.Question2}</div>
                  <div className='areinner'>{line3.inner2.one}<span> {line3.inner2.two}</span> {line3.inner2.three}</div>
                </div>
                <div className='innerline'></div>
              
                <div className='arewho'>
                  <div className='sene'><span>{line3.head3}</span>{line3.Question3}</div>
                  <div className='areinner'>{line3.inner3.one} <span>{line3.inner3.two}</span> {line3.inner3.three}</div>
                </div>
                <div className='innerline'></div>
                <div className='arewho'>
                  <div className='sene'><span>{line3.head4}</span>{line3.Question4}</div>
                  <div className='areinner'>{line3.inner4.one} <span>{line3.inner4.two}</span> {line3.inner4.three} <span>{line3.inner4.four}</span></div>
                </div>
                <div className='innerline'></div>
                <div className='arewho'>
                  <div className='sene'><span>{line3.head5}</span>{line3.Question5}</div>
                  <div className='areinner'><span>{line3.inner5.one}</span> {line3.inner5.two}</div>
                </div>
                <div className='innerline'></div>

                <div className='arewho'>
                  <div className='sene'><span>{line3.head6}</span>{line3.Question6}</div>
                  <div className='areinner'>{line3.inner6.one} <span>{line3.inner6.two}</span> {line3.inner6.three}<span>{line3.inner6.four}</span></div>
                </div>
                <div className='innerline'></div>
           </div>
        </section> 
       <br />
  </div>
 </main>         

 <div className='lineheadTwoHome'>
                            <div className='lineinterhome'></div>
                        </div>

                        <main>
  <div className='MainHome'>

       <section>
           <div className='Thirdsection'>
             <div>
              <div className='solutionp'>{line4.Head}</div>
              <br />
              <div className='soliutioninner'>{line4.headsub}</div>
             </div>
         
             <br />
             <br />
             <div className='solutions'>
              <div className='solinner1'>
                <div className='soluimga'><img src='/images/uiux.svg' /></div>
                <div className='dep'>{line4.sol.one}</div>
                <br />
                <br />
              </div>
              <div className='solinner1 fuh'>
                <div className='soluimga'><img src='/images/sd.svg' /></div>
                <div className='dep'>{line4.sol.two}</div>
                <br />
                <br />
              </div>
              <div className='solinner3 fuh'>
                <div className='soluimga'><img src='/images/md.svg' /></div>
                <div className='dep'>{line4.sol.three}</div>
                <br />
                <br />
              </div>
              <div className='solinner2 guh'>
                <div className='soluimga'><img src='/images/wd.svg' /></div>
                <div className='dep'>{line4.sol.four}</div>
                <br />
                <br />
                {/* <br / */}
              </div>
              <div className='solinner2 guh fuh'>
                <div className='soluimga'><img src='/images/er.svg' /></div>
                <div className='dep'>{line4.sol.five}</div>
                <br />
                <br />
              </div>
              <div className='solinner guh fuh'>
                <div className='soluimga'><img src='/images/cr.svg' /></div>
                <div className='dep'>{line4.sol.six}</div>
                <br />
                <br />
              </div>
             </div>
             <br />
             <br />
             <div>
              <div className='learnmore'>{line4.learn}</div>
             </div>
           </div>
        </section> 
       <br />
  </div>
 </main>    
 <div className='lineheadTwoHome'>
                            <div className='lineinterhome'></div>
                        </div>

 <main>
  <div className='MainHome'>

       <section>
           <div className='Fouthsection'>
             <div className='industry'>
              <div>
                <div className='solutionp'>{line5.Head}</div>
                <br />
                <div className='vghfg'>{line5.headsub}</div>
                <br />
                <div className='indus'><img src='/images/indus.svg' /></div>
              </div>
              <div>
                <div className='ideastar'>{line5.sol.one}</div>
                <div className='linekoko'></div>
                <div className='ideastar'>{line5.sol.two}</div>
                <div className='linekoko'></div>
                <div className='ideastar'>{line5.sol.three}</div>
<br />
                <div className='talkus'>{line5.learn}</div>
              </div>
             </div>
           </div>
        </section> 
       
  </div>
 </main>    

 <div className='lineheadTwoHome'>
                            <div className='lineinterhome'></div>
                        </div>
 <main>
  <div className='MainHome'>

       <section>
           <div className='Fithsection'>
               <div>
                <div className='brandgu'>{line6.Head}</div>
                <br />
                <div className='Brandhuhu'>{line6.headsub}</div>
                <br />
                <br />
                <br />
                <div className='nttl'>
                  <div className='huhum'>
                    <div className='brand'><img src='/images/b1.svg' /></div>
                  </div>
                  <div className='huhum' id='mobikl'>
                  <div className='brand'><img src='/images/b2.svg' /></div>
                  </div>
                  <div className='huhum' id='mobikl'>
                  <div className='brand' id='ghdxthfg'><img src='/images/b3.png' /></div>
                  </div>
                </div>
               </div>
               <br />

           </div>
        </section> 
       
  </div>
 </main>  
 <div className='lineheadTwoHome' id='ghvuhj'>
                            <div className='lineinterhome'></div>
                        </div>
 <div className='letstalk'>
 <a href="#" className="shutter-out-horizontal"><div className='vhgv'>{line6.learn}<p className='cyfhv'><img src='/images/arrow.png' /></p></div></a> 
 </div>

 </>
  )
}

export default Home
