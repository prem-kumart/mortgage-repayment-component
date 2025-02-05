/* eslint-disable react/prop-types */
import { useRef, useState ,useEffect } from 'react'

const Radio = ({title,id,group,mortgageType,setMortgageType}) => {
 
  const radioElement = useRef(null);
 
  function radioButtonOnChange(event){
       const newCheckedMortage = Object.keys(mortgageType).reduce((acc,key)=>{
            if (key == id) {
                acc[key] = true;
            }else {
               acc[key] = false;
            }
            return acc
       },{})
       setMortgageType(newCheckedMortage);    
  }

   if(!mortgageType[id] && radioElement.current) {
       radioElement.current.checked=false;
   }


  return (
    <label className={`flex flex-row justify-items-start gap-4 border-1  rounded-sm p-3  cursor-pointer ${mortgageType[id] ? "border-lime-custom bg-lime-custom/15" : "border-slate-400"}`}>
         <input className="bg-slate-700 " type="radio" ref={radioElement} id={id} name={group} onChange={radioButtonOnChange}/>
         <p className="text-slate-900 text-preset-three">{title}</p>
    </label>
   
  )
}

export default Radio
