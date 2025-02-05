import Form from './components/Form.jsx';
import Results from './components/Results.jsx'
import {useState} from 'react'

import './App.css'

function App() {

  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  return (
      <main className='sm:flex sm:justify-center sm:items-center bg-slate-100 w-screen h-screen sm:min-h-[1193px] lg:min-h-[702px]'>
        <div className="flex flex-col lg:flex-row  sm:gap-0 bg-white  sm:rounded-3xl  sm:shadow-xl sm:max-w-[688px]  lg:max-w-[1008px] lg:h-auto font-PlusJakartaSans">
             <Form setMonthlyRepayment={setMonthlyRepayment} setTotalRepayment={setTotalRepayment}/>
             <Results monthlyRepayment={monthlyRepayment} totalRepayment={totalRepayment}/>
        </div>
      </main>
  )
}

export default App
