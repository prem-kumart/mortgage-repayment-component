import Form from './components/Form.jsx';
import Results from './components/Results.jsx'
import {useState} from 'react'

import './App.css'

function App() {

  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  return (
      <main className='sm:flex  sm:justify-center sm:items-center bg-slate-100 w-screen h-screen min-h-[606px]'>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-row-1 sm:gap-0 bg-white  sm:rounded-3xl  sm:shadow-xl sm:w-[68%] sm:h-[94%] lg:w-[86%] lg:h-[65%] lg:max-w-[1008px] lg:min-h-[606px] lg:max-h-[606px]  ">
             <Form setMonthlyRepayment={setMonthlyRepayment} setTotalRepayment={setTotalRepayment}/>
             <Results monthlyRepayment={monthlyRepayment} totalRepayment={totalRepayment}/>
        </div>
      </main>
  )
}

export default App
