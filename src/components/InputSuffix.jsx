import {useState} from 'react'

const InputSuffix = ({id,title,value,setValue,suffix,error}) => {
  

   const [inputFocused,setInputFocused] = useState(false);
    
    function inputElementFocused(){
       setInputFocused(true)
    }
  
    function inputElementBlur(){
       setInputFocused(false)
    }
    
  


  return (
       <div>
        <label htmlFor={id} className="flex flex-col gap-2 text-slate-700">
            <h2 className="text-preset-four">{title}</h2>
            <div className="flex flex-row">
                <input className={`bg-white border-solid border-[1px] border-r-0 rounded-l-[4px]   p-1 w-[100%] text-slate-900 text-preset-three pl-4 focus:outline-0 focus:border-lime-custom cursor-pointer ${error? "border-red":"border-slate-500" }`}
                      type="number" 
                      id={id} 
                      name='amount'
                       value={value} 
                       onChange={(e)=>setValue(e.target.value)} 
                       onFocus={inputElementFocused}
                       onBlur={inputElementBlur}/>
                <span className={`border-[1px] border-solid   border-l-0 rounded-r-[4px] px-4 py-3 text-preset-three  ${inputFocused ? "bg-lime-custom border-lime-custom text-slate-900"  :  error ? "bg-red border-red text-white"  :  "bg-slate-100 border-slate-500 text-slate-700"}`}>{suffix}</span>
            </div>
        </label>
        { error && <p className="text-red ">This field is required</p>}
        </div>
  )
}

export default InputSuffix
