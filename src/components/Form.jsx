import {useState} from "react";
import Radio from "./Radio";
import Button from "./Button";
import InputPrefix from './InputPrefix.jsx';
import InputSuffix from './InputSuffix.jsx';

const Form = ({setMonthlyRepayment,setTotalRepayment}) => {
    const [amount,setAmount] = useState('');
    const [term,setTerm] = useState('');
    const [interest,setInterest] = useState('');
    const [mortgageType, setMortgageType] = useState({repayment:false,interest_only:false})
    const[errors,setErrors] = useState({amount:"", term:"", interest_only:"",mortgagetype:"" });

  function formSubmit(formEvent){
    
     formEvent.preventDefault();
     setErrors({amount:"", term:"", interest:""})

     //Manual Validation
     if(amount == ""){
        setErrors({...errors,amount:"This field is required"})
        return;
     }

     if(term == ""){
      setErrors({...errors,term:"This field is required"})
      return;
     }

     if(interest == ""){
      setErrors({...errors,interest:"This field is required"})
      return;
     }

     if(mortgageType.interest == false && mortgageType.repayment ==false){
       setErrors({...errors,mortgagetype:"This field is required"})
       return;
     }

    /*  Monthly Payments Calculator  M= P×r× (1+r)^n / (1+r)^n-1    */
    
    
     //Calculating the monthly Repayments.
    const formattedAmount = Number(amount.replace(/,/g,"")); //Formatting P by  Removing ',' from the input amount.
    const interestRate = (Number(interest)/100)/12; //Calculate 'r' => Interest divided by 100  divided by 12 ( 1 year = 12 months)
    

    if(mortgageType.repayment){
        const onePlusRate = Math.pow(1 + Number(interestRate),12 * Number(term))  //( 1 + r )^n  (n=term)
        const monthlyPayment = (formattedAmount * interestRate * onePlusRate)/ (onePlusRate-1 )
        //console.log(Math.round(monthlyPayment*100)/100)
        setMonthlyRepayment(Math.round(monthlyPayment*100)/100)
        setTotalRepayment(Math.round(monthlyPayment * 12 * term * 100)/100)
    }

    if(mortgageType.interest_only){

       /* Interest Only  = Amount × InterestRate / 12  */

       const interestOnlyRepayment =  ( (Number(interest)/100) * formattedAmount ) / 12;
       setMonthlyRepayment(Math.round((interestOnlyRepayment * 100) /100));
       setTotalRepayment((interestOnlyRepayment * 12 ) + formattedAmount)
    }

  }

  return (
    <section className="flex flex-col px-6 py-8 sm:p-10">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-start gap-2">
        <h1 className="text-preset-two text-slate-900 ">Mortgage Calculator</h1>
        <a className="text-preset-four text-slate-700 underline underline-offset-4">Clear All</a>
    </div> 
    <form onSubmit={formSubmit} className="flex flex-col gap-6 mt-6">
        <div>
              <InputPrefix id="amount" title="Mortgage Amount" value={amount} setValue={setAmount} />
              { errors.amount && <p className="text-red font-PlusJakartaSans">{errors.amount}</p>}
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
            <div className="flex flex-col">
            <InputSuffix id="term" title="Mortagage Term" value={term} setValue={setTerm}  suffix="years"/>
            { errors.term && <p className="text-red font-PlusJakartaSans">{errors.term}</p>}
            </div>
            <div className="flex flex-col">
            <InputSuffix id="interest_rate" title="Interest Rate" value={interest} setValue={setInterest} suffix="%"/>
            { errors.term && <p className="text-red font-PlusJakartaSans">{errors.term}</p>}
            </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-3" >
            <h2 className="text-preset-four text-slate-700">Mortage Type</h2>
            <Radio  title="Repayment" id="repayment" group="mortgage_type" mortgageType={mortgageType} setMortgageType={setMortgageType}/>
            <Radio title="Interest Only" id="interest_only" group="mortgage_type" mortgageType={mortgageType} setMortgageType={setMortgageType}/>
            { errors.mortgagetype && <p className="text-red font-PlusJakartaSans">{errors.mortgagetype}</p>}
        </div>
       <Button buttonName="Caculate Repayments" buttonType="submit"/>
    </form>
    </section>
  )
}


export default Form
