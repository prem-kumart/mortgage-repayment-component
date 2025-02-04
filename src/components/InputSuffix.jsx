

const InputSuffix = ({id,title,value,setValue,suffix}) => {
  return (
        <label htmlFor={id} className="flex flex-col gap-2 text-slate-700">
            <h2 className="text-preset-four">{title}</h2>
            <div className="flex flex-row">
                <input className="bg-white border-solid border-[1px] border-r-0 rounded-l-[4px]  border-slate-500 p-1 w-[100%] text-slate-900 text-preset-three pl-4 " type="number" id={id} name='amount' value={value} onChange={(e)=>setValue(e.target.value)} />
                <span className="border-[1px] border-solid border-slate-500 bg-slate-100 text-slate-700 border-l-0 rounded-r-[4px] px-4 py-3 text-preset-three">{suffix}</span>
            </div>
        </label>
  )
}

export default InputSuffix
