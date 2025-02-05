/* eslint-disable react/prop-types */
import { useState} from 'react'

const InputPrefix = ({id,title,value,setValue,error}) => {

  const [inputFocused,setInputFocused] = useState(false);
  
  function inputElementFocused(){
     setInputFocused(true)
     console.log(inputFocused)
  }

  function inputElementBlur(){
     setInputFocused(false)
     console.log(inputFocused)
  }
  
  
  const formatValue = (e) =>{
       const formatedValue = new Intl.NumberFormat('en-US', {
             style: 'currency',
             currency:'USD',
             maximumFractionDigits : 0,

        }).format(e.target.value.replace(/[^0-9\.]+/g,""))
        
  setValue(formatedValue.replace(/[$]/g,""))

  }


  return (
     
    <div>
    <label htmlFor={id} className="flex flex-col gap-3 text-slate-700" >
      <h2 className="text-preset-four">{title}</h2>
      <div className="flex flex-row " >
           <span className={` border-[1px] border-solid border-r-0 rounded-s-[4px] px-4 py-3 text-preset-three  ${inputFocused ? "bg-lime-custom border-lime-custom text-slate-900"  :  error ? "bg-red border-red text-white"  : "bg-slate-100 border-slate-500 text-slate-700 "} `}>&#163;</span>
           <input className={`bg-white border-solid border-[1px] border-l-0 rounded-r-[4px] rounded-l-[0px]  p-1 pl-3 w-[100%] text-slate-900 text-preset-three  focus:outline-0 focus:border-lime-custom cursor-pointer  hover:border-slate-900 ${error? "border-red":"border-slate-500"}`}   
                            type="text" id={id} name='amount' 
                            value={value}   
                            onChange={formatValue}
                            onFocus={inputElementFocused}
                            onBlur={inputElementBlur}
                                />  
       </div>
    </label>
    { error && <p className="text-red ">This field is required</p>}
    </div>

  )
}

export default InputPrefix
