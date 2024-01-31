import React, { useEffect } from 'react'
import "./Home.css"
import { useTranslation } from "react-i18next";

function Home() {
  const {t} = useTranslation();
  const {line1, line2} = t("description");

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
             <div className='sideinner' id='cthfgj'>Speed Matters.</div>
              <div className='siderinnnertwo ' id='huhum'>
                <div>A 1-second</div>
                <div>website</div>
                <div>delay leads</div>
                <div>to a</div>
                <div><span className='sevenko'>7%</span>drop in</div>
                <div>conversions;</div>
                <div>optimize for</div>
                <div>success.</div>
              </div>
             </div>
              <div className='siderinnnertwo ' id='hiff'>
              A 1-second website delay leads to a <span className='sevenko'>7%</span> drop in conversions; optimize for success.
              </div>
              <div className='lineop jygjgv'></div>
            </div>
            <div  className='Homeinnerfingtwo' >
             <div className='Homtwoin'>
             <div className='sideinner'>Automate or stagnate.</div>
              <div className='siderinnnertwo ' id='huhum'>
                <div>A</div>
                <div><span className='sevenko'>63%</span> error</div>
                <div>reduction </div>
                <div>beckons those</div>
                <div>who prioritize </div>
                <div>automation;</div>
                <div>act now.</div>
              </div>
              <div className='siderinnnertwo ' id='hiff'>
              A <span className='sevenko'>63%</span> error reduction beckons those who prioritize automation; act now.
              </div>
             </div>
            </div>
            <div  className='HomeinnerfingThree' >
              <div className='lineop'></div>
              <div className='vgfh '>
              <div className='sideinner'>Act now to stay ahead.</div>
              <div className='siderinnnertwo ' id='huhum'>
                <div>Adopting</div>
                <div>technology</div>
                <div>boosts</div>
                <div>efficiency by </div>
                <div><span className='sevenko'>27%</span></div>
                <div className='visi'>visi</div>
                <div className='visi'>visi</div>
                <div className='visi'>visi</div>
              </div>
              <div className='siderinnnertwo ' id='hiff'>Adopting technology boosts efficiency by <span className='sevenko'>27%</span></div>
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
                  <div className='ques' ><span>W</span>ho We Are?</div>
                  <div className='areinner'>Tech enthusiasts at New Tab Tech Lab, blend
                    <span> creativity</span> and <span>expertise</span> for <span>unmatched results.</span></div>
                </div>
                <div className='innerline'></div>
                <div className='arewho'>
                  <div className='sene'><span>W</span>hat We Do?</div>
                  <div className='areinner'>Explore <span>cutting-edge solutions</span> tailored for ideas still sitting on paper, startups, and enterprises.</div>
                </div>
                <div className='innerline'></div>
              
                <div className='arewho'>
                  <div className='sene'><span>W</span>hy Choose Us?</div>
                  <div className='areinner'>Innovate with future-forward solutions, <span>customer-centric approach,</span> proven expertise, scalability, and collaborative success.</div>
                </div>
                <div className='innerline'></div>
                <div className='arewho'>
                  <div className='sene'><span>W</span>here We Operate?</div>
                  <div className='areinner'>Based (You know? Technology has no location) in <span>India,</span> we serve clients globally, <span>impacting industries worldwide.</span></div>
                </div>
                <div className='innerline'></div>
                <div className='arewho'>
                  <div className='sene'><span>W</span>hen to Engage?</div>
                  <div className='areinner'><span>Now is the time;</span> we are ready to collaborate on new or existing projects globally.</div>
                </div>
                <div className='innerline'></div>

                <div className='arewho'>
                  <div className='sene'><span>H</span>ow We Work?</div>
                  <div className='areinner'>Transparent, collaborative, and efficient - we ensure a <span>seamless experience</span> from <span>consultation to delivery.</span></div>
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
              <div className='solutionp'>Solutions</div>
              <br />
              <div className='soliutioninner'>Techcrafted Solutions for Your Every Challenge.</div>
             </div>
         
             <br />
             <br />
             <div className='solutions'>
              <div className='solinner1'>
                <div className='soluimga'><img src='/images/uiux.svg' /></div>
                <div className='dep'>UI-UX Design</div>
                <br />
                <br />
              </div>
              <div className='solinner1 fuh'>
                <div className='soluimga'><img src='/images/sd.svg' /></div>
                <div className='dep'>Software Development</div>
                <br />
                <br />
              </div>
              <div className='solinner3 fuh'>
                <div className='soluimga'><img src='/images/md.svg' /></div>
                <div className='dep'>Mobile App Development</div>
                <br />
                <br />
              </div>
              <div className='solinner2 guh'>
                <div className='soluimga'><img src='/images/wd.svg' /></div>
                <div className='dep'>Web App Development</div>
                <br />
                <br />
                {/* <br / */}
              </div>
              <div className='solinner2 guh fuh'>
                <div className='soluimga'><img src='/images/er.svg' /></div>
                <div className='dep'>Enterprise resource planning</div>
                <br />
                <br />
              </div>
              <div className='solinner guh fuh'>
                <div className='soluimga'><img src='/images/cr.svg' /></div>
                <div className='dep'>customer relationship management</div>
                <br />
                <br />
              </div>
             </div>
             <br />
             <br />
             <div>
              <div className='learnmore'>Learn More</div>
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
                <div className='solutionp'>Industries</div>
                <br />
                <div className='vghfg'>Unleashing Innovation at Every Click!</div>
                <br />
                <div className='indus'><img src='/images/indus.svg' /></div>
              </div>
              <div>
                <div className='ideastar'>Are you an idea-stage entrepreneur with your brilliant concept on a crumpled piece of paper?</div>
                <div className='linekoko'></div>
                <div className='ideastar'>Are you navigating the initial years of your organization?</div>
                <div className='linekoko'></div>
                <div className='ideastar'>Are you a legacy company seeking Digital Transformation?</div>
<br />
                <div className='talkus'>Talk To Us</div>
              </div>
             </div>
           </div>
        </section> 
       
  </div>
 </main>    

 

<main>
<div className='MainHome'>

     <section>
         <div className='Fouthsection'>
          
       <div>
          <div className='buhead'>
          <div>Bundles</div>
          </div>
          <br />
          <br />
          <div className='bundles'>
              <div className='bundleinner'>
                  <div className='hgfgv huihu'>Let's Talk</div>
                  <br />
                  <div  className='hgfgv'>Lorem ipsum dolor sit amet</div>
                  <br/>
                  <div className='linek'></div>
               
                  <div className='hgfgvewdag'>
                      <ul>
                          <li>Up to 15 developers</li>
                          <li>Up to 100 services</li>
                          <li>Unlimited rollouts </li>
                          <li>Single sign-on </li>
                          <li> Slack & email support</li>
                      </ul>
                  </div>
                  <br />
         
               
                  <div className='schedule'>Schedule A Call</div>
            
              </div>
              <div className='bundleinner'>
              <div className='hgfgv huihu'>Custom</div>
                  <br />
                  <div  className='hgfgv'>Lorem ipsum dolor sit amet</div>
                  <br/>
                  <div className='linek'></div>
               
                  <div className='hgfgvewdag'>
                      <ul>
                          <li>Up to 15 developers</li>
                          <li>Up to 100 services</li>
                          <li>Unlimited rollouts </li>
                          <li>Single sign-on </li>
                          <li> Slack & email support</li>
                      </ul>
                  </div>
                  <br />
         
               
                  <div className='schedule'>Let's Talk</div>
            
              </div>
              <div className='bundleinner'>
              <div className='hgfgv huihu'>Let's Talk</div>
                  <br />
                  <div  className='hgfgv'>Lorem ipsum dolor sit amet</div>
                  <br/>
                  <div className='linek'></div>
               
                  <div className='hgfgvewdag'>
                      <ul>
                          <li>Up to 15 developers</li>
                          <li>Up to 100 services</li>
                          <li>Unlimited rollouts </li>
                          <li>Single sign-on </li>
                          <li> Slack & email support</li>
                      </ul>
                  </div>
                  <br />
         
               
                  <div className='schedule'>Schedule A Call</div>
            
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
           <div className='Fithsection'>
               <div>
                <div className='brandgu'>Our Brands</div>
                <br />
                <div className='Brandhuhu'>Our lab of innovation tested through three compelling brands.</div>
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
 <a href="#" className="shutter-out-horizontal"><div className='vhgv'>Let's connect<p className='cyfhv'><img src='/images/arrow.png' /></p></div></a> 
 </div>

 </>
  )
}

export default Home

