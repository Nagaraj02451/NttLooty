import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { Divide as Hamburger } from 'hamburger-react'
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom"
const languages = [
    { code: "Home", lang: "United Kingdom" , Image : "/images/uk.png"  },
    { code: "Home", lang: "United States" , Image : "/images/us.png"  },
    { code: "Deutsch", lang: "Germany" , Image : "/images/ger.png"  },
    { code: "Home", lang: "Australia" , Image : "/images/aus.png"  },
];
// Deutsch
function Navbar() {
    const refOneNav = useRef()
    const refOneNavO = useRef()
    const refOneNavT = useRef()
    const refOneNavTh = useRef()
    const refOneNavFo = useRef()

    const {t} = useTranslation();
    const {line1, line2} = t("description");
  
    const { i18n } = useTranslation();

    const refdate = useRef(null)
    const [isOpen, setOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const [Toggle, setToggle] = useState(false)

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    const changeLanguage = (lng) => {
        setToggle(false)
        i18n.changeLanguage(lng);
        // refdate.current.classList.remove("finghgvh")
        // alert("ghjgk")
    };




    const langdata = () => {
        setToggle(true)
        refdate.current.classList.toggle("finghgvh")
    }
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    const clikednav =(e)=>{
        refOneNav.current.classList.add("froppnav");
        refOneNavO.current.classList.remove("froppnav");
        refOneNavT.current.classList.remove("froppnav");
        refOneNavTh.current.classList.remove("froppnav");
        refOneNavFo.current.classList.remove("froppnav");
      }
    
      const clikednavC =(e)=>{
        refOneNavO.current.classList.add("froppnav");
        refOneNav.current.classList.remove("froppnav");
        refOneNavT.current.classList.remove("froppnav");
        refOneNavTh.current.classList.remove("froppnav");
        refOneNavFo.current.classList.remove("froppnav");
      }
    
      const clikednavS = (e)=>{
        refOneNavT.current.classList.add("froppnav");
        refOneNav.current.classList.remove("froppnav");
        refOneNavO.current.classList.remove("froppnav");
        refOneNavTh.current.classList.remove("froppnav");
        refOneNavFo.current.classList.remove("froppnav");

      }
    
      const clikednavCon = (e)=>{
        refOneNavTh.current.classList.add("froppnav");
        refOneNavT.current.classList.remove("froppnav");
        refOneNavO.current.classList.remove("froppnav");
        refOneNav.current.classList.remove("froppnav");
        refOneNavFo.current.classList.remove("froppnav");
      }
    
      const clikednavCH = (e)=>{
        refOneNavFo.current.classList.add("froppnav");
        refOneNavTh.current.classList.remove("froppnav");
        refOneNavT.current.classList.remove("froppnav");
        refOneNavO.current.classList.remove("froppnav");
        refOneNav.current.classList.remove("froppnav");
      }

      const ghhgfv = ()=>{
        refOneNavFo.current.classList.remove("froppnav");
        refOneNavTh.current.classList.remove("froppnav");
        refOneNavT.current.classList.remove("froppnav");
        refOneNavO.current.classList.remove("froppnav");
        refOneNav.current.classList.remove("froppnav");
      }

    return (
        <>
            <nav >
                <div className="Navbar">
                    <div>
                        <div className='logohead'>
                            <a href='/'>    <img src='/images/logo.svg' alt='NTTL' /> </a>
                        </div>
                    </div>
                    <div>
                        <div className='NavCollection'>
                            <Link to='/about' ><div className='pages' onClick={clikednav} ref={refOneNav}>{line1.line}</div></Link>
                            <Link to='/solution'> <div className='pages' ref={refOneNavO}  onClick={clikednavC}>{line1.line1}</div></Link>
                            <Link to='/consulting'><div className='pages' ref={refOneNavT}  onClick={clikednavS}>{line1.line2}</div></Link>
                            <Link to='/ourprocess'><div className='pages' ref={refOneNavTh} onClick={clikednavCon}>{line1.line3}</div></Link>
                            <Link to="/industry"><div className='pages' onClick={clikednavCH} ref={refOneNavFo}>{line1.line4}</div></Link>
                            <Link to="/contact"> <div className='connect' onClick={ghhgfv}>{line1.line5}</div></Link>
                            <div className='linehead'>
                                <div className='lineinter'></div>
                            </div>
                            <div className='languagelogo' onClick={langdata}>
                                <img src='./images/lang.svg' alt='NTTL' />
                            </div>

                            <div className='lineheadTwo'>
                                <div className='lineinter'></div>
                            </div>
                            <div className='hamburger' >
                                <Hamburger toggled={isOpen} toggle={setOpen} />
                            </div>
                        </div>

                    </div>

                </div>

            </nav>

            <div className={Toggle ? "dropn" : "finghgvh"} ref={refdate}>
                <div>

                    {languages.map((lng) => {
                        return (
                            <div className='lank'>
                            <div 
                                className={lng.code === i18n.language ? "selected" : ""}
                                key={lng.code}
                                onClick={() => changeLanguage(lng.code)}
                            >
                               

                                <div className='cgfhfv'><div className='ytfghv'><img src={lng.Image}/></div> {lng.lang}</div>
                        <div className='cgfhfvwegd'>
                            {/* <div className='cghvj'>Home</div> */}
                            <div className='cghvj' >{lng.code}</div> 
                        </div>
                                </div>
                                </div>
                        );
                    })}
                 

                </div>
            </div>

            <div className={isOpen ? "Menu" : "Menutwo"}>
                <div className='MenuHeade'>
                    <div className='MenuInnter'>
                        <div className='menulogo'>
                            <img src='/images/footerlogo.png' />
                        </div>
                        <div className='MenuIteam'>
                            <div className='languagelogo'>
                                <img src='/images/footerlang.png' alt='NTTL' />
                            </div>
                            <div className='lineheadTwo'>
                                <div className='lineinterTwo'></div>
                            </div>
                            <div className='hamburger' >
                                <Hamburger toggled={isOpen} toggle={setOpen} />
                            </div>
                        </div>
                    </div>
                    <div className='Menucolle'>
                    <a href='/about'><div className='pagesTwo'>About</div></a>
                    <a href='/solution'> <div className='pagesTwo'>Solutions</div></a>
                    <a href='/consulting'><div className='pagesTwo'>Consulting</div></a>
                        <div className='pagesTwo'>Our Process</div>
                        <a href="/industry"> <div className='pagesTwo'>Industries</div></a>
                        <div className='connectTwo pagesTwo'>Let's Connect</div>
                        <div className='pagesTwo'>+91 98000 98000</div>
                        <div className='pagesTwo'>info@newtabtechlab.com</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
