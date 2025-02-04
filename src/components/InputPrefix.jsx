/* eslint-disable react/prop-types */


const InputPrefix = ({id,title,value,setValue}) => {
  
  const formatValue = (e) =>{
       const formatedValue = new Intl.NumberFormat('en-US', {
             style: 'currency',
             currency:'USD',
             maximumFractionDigits : 0,

        }).format(e.target.value.replace(/[^0-9\.]+/g,""))
        
  setValue(formatedValue.replace(/[$]/g,""))

  }


  return (

    <label htmlFor={id} className="flex flex-col gap-3 text-slate-700" >
      <h2 className="text-preset-four">{title}</h2>
      <div className="flex flex-row" >
           <span className="text-slate-700 bg-slate-100 border-[1px] border-solid border-slate-500 border-r-0 rounded-s-[4px] px-4 py-3 text-preset-three">&#163;</span>
           <input className="bg-white border-solid border-[1px] border-l-0 rounded-r-[4px] rounded-l-[0px] border-slate-500 p-1 pl-3 w-[100%] text-slate-900 text-preset-three "   
                            type="text" id={id} name='amount' 
                            value={value}   
                            onChange={formatValue}
                                />  
       </div>
    </label>

  )
}

export default InputPrefix
