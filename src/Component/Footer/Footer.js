import React from 'react'
import "./Footer.css"
import ScrollToTop from "react-scroll-to-top";
import { useTranslation } from "react-i18next";

function Footer() {
  const {t} = useTranslation();
  const {footer } = t("description");
  return (
    <>
    <footer>


    <ScrollToTop className='yjhhjfj' smooth top="50" />

      <div className='footer'>
        <div className='footerinner'>
          <div className='footerlogo'>
            <img src='/images/footerlogo.png' alt='NTTL' />
          </div>
          <div className='footerinput'>
            <div className='lan'>{footer.foo1}</div>
            <div className='Footerlan'>
              <img src='/images/footerlang.png' alt='Lang' />
            </div>
          </div>
        </div>
        <div className='footerinfo'>
            <div className='rightinfo'>
              <div className='headfooter'>{footer.foo2}</div>
              <br />
              <div className='addres'>1/146, Bettatti, Yedapalli Post, Coonoor, The Nilgiris, Tamilnadu, 643104 - IN.</div>
              <br />
              <a href='/'> <div className='sidefoo'>+91 98000 98000</div></a>
              <br />
              <a href='/'>  <div className='sidefoo'>info@newtabtechlab.com</div></a>
            </div>
            <div className='center footerinfohun'>
              <div className='headfooter'>{footer.foo3}</div>
              <br />
            <a href='/about'>  <div className='colllection1'>{footer.foo4}</div></a>
            <a href='/'><div className='colllection'>{footer.foo5}</div></a>
            <a href='/consulting'><div className='colllection'>{footer.foo6}</div></a>
            <a href='/industry'> <div className='colllection'>{footer.foo7}</div></a>
            <a href='/solution'><div className='colllection'>{footer.foo8}</div></a>
              <div className='colllection'>{footer.foo9}</div>
            </div>
            <div className='footerinfohun'>
              <div className='headfooter'>{footer.foo10}</div>
              <br />
              <div className='colllection1'>x</div>
              <a href='/'><div className='colllection'>{footer.foo11}</div></a>
              <a href='/'> <div className='colllection'>{footer.foo12}</div></a>
              <a href='/'> <div className='colllection'>{footer.foo13}</div></a>
            </div>
       
        
        </div>
        <br />
        <br />
        <br />
        <br />
        
      </div>
  
    </footer>
    <div className='Footerline'></div>
    <div className='sitema'>
      <div className='siteinner'>
         
            <div className='sidefoo'>{footer.foo14}</div>
            <div className='sidefoo'>{footer.foo15}</div>
          
          </div>
          </div>
    </>
  )
}

export default Footer
