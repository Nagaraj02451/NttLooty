import React, { useState } from 'react';
import countrydata from './Countrydata.json';
import '../Contact/Contact.css'
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation();
  const { line6 ,contact } = t("description");

  const[countryid, setCountryid]=useState('');
  const[state, setState]=useState([]);
  const[stateid, setStateid]= useState('');
 
   const handlecounty=(e)=>{
     const getcountryId= e.target.value;
     const getStatedata= countrydata.find(country=>country.country_id===getcountryId).states;
     setState(getStatedata);
     setCountryid(getcountryId);
   //console.log(getcountryId);
   }
 
   const handlestate = (e)=>{
     const stateid= e.target.value;
     //console.log(stateid);
     setStateid(stateid);
 
   }
 const handleSubmit=(e)=>{
 e.preventDefault();
 alert("Get Country id"+countryid+ " And "+ stateid);
 }
  return (
    <>
      <main>
          <div className='cnt2'>
          
          <div className='cnt3'>
           <div className='cnt31'> Let's connect</div>
           <div className='cnt32'><span className='sp1'>Email Id : </span>
                                info@newtabtechlab.co </div>
           <div className='cnt32'><span>Phone Number : </span> +91 98000 98000</div>
           <div className='cnt32'><span>Registered Address : </span> 1/146, Bettatti,<br></br> Yedapalli Post, Coonoor, The Nilgiris,<br></br> Tamilnadu, 643104 - India.</div>

          </div>

         
          <div className='cnt4'>
            <div className='cnt5'> 
            <div className='cnt41'>
            <label>Name<span>(required)</span></label>
            <br></br>
            <input placeholder='Full Name'></input>
          </div>

          <div className='cnt41'>
            <label>Company</label>
            <br></br>
            <input placeholder='Company Name' className='id1'></input>
          </div>


          <div className='cnt41' id='cnt41'>
            <div className='cnt43'>
               <label>Designation</label>
             <br></br>
             <br></br>
              <div className='cnt44'>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Your Designation </option>
                  <option>Founderr</option>
                  <option> C Level Executive</option>
                  <option>Manager</option>
                  <option>Other</option>
                </select>
              </div>
            </div>


            <div className='cnt43'>
               <label>Industry<span>(required)</span></label>
             <br></br>
             <br></br>
              <div className='cnt44' id='cnt44'>
                <select >
                  <option>Select Your Industry </option>
                  <option>OptionA</option>
                </select>
              </div>
            </div>
           
          </div>




          <div className='cnt41 chan' id='cnt41'>

            <div className='cnt42'>
            <label>Email<span>(required)</span></label>
            <br></br>
            <input placeholder='name@company.com'></input>
            </div>

              <div className='cnt42'>
              <label>Phone<span>(required)</span></label>
            <br></br>
            <input placeholder='+91 98000 98000'></input>
            </div>
           
          </div>

          
         
          <div className='cnt41' id='cnt41'>


            
          <div className='cnt43' id='cnt43'>
               <label>Country<span>(required)</span></label>
             <br></br>
             <br></br>
              <div className='cnt44' id='cnt44'>
                <select  onChange={(e)=>handlecounty(e)}>
                  {/* <option>India</option> */}
                  {
                        countrydata.map( (getcountry,index)=>(
                          <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option> 
                        ))

                        }
                                  </select>
              </div>
            </div>


            <div className='cnt43'>
               <label>State/Province <span>(required)</span></label>
             <br></br>
             <br></br>
              <div className='cnt44'>
                <select onChange={(e)=>handlestate(e)}>
                  <option >State/Province Name </option>
                  {
                          state.map((getstate, index)=>(
                            <option value={getstate.state_id} key={index}>{ getstate.state_name }</option>
                          ))
                        }                </select>
              </div>
            </div>


           
          </div>


          <div className='cnt41' >
            <label>Pin code/zip code<span>(required)</span></label>
            <br></br>
            <input placeholder='643001'></input>
          </div>

          
          <div className='cnt41'>
            <label>Message</label>
            <br></br>
            <textarea placeholder='What are you looking for?' rows={10}></textarea>
          </div>

            </div>
         

          <div className='subbtn'>
              <div className='subbtn1'>
                 <button>Submit</button>
              </div>
          </div>


          </div>

          </div>
      </main>
      
    </>
  )
}

export default Contact