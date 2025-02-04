import EmptyResults from "./EmptyResults";
import EmpltyResults from "./EmptyResults";

const Results = ({monthlyRepayment,totalRepayment }) => {


  function toEur(number){

    return new Intl.NumberFormat('en-GB', { style:"currency", currency: 'GBP'}).format(number)
  }
  
  

  return  ( monthlyRepayment==0 ? <EmptyResults/> : <section className="flex flex-col px-4 sm:p-10 py-5 gap-4  sm:rounded-b-3xl lg:rounded-r-3xl  lg:rounded-bl-[60px] bg-slate-900 ">
       <h2 className="text-white text-preset-two">
         Your Results
       </h2>
       <p className="text-slate-300">
       Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
       </p>
       <div className="flex flex-col gap-4 rounded-md border-t-4 border-lime-custom bg-black/25 px-4 py-6 mt-6">
          <div className="flex flex-col gap-2">
            <p className="text-slate-300">Your monthly repayments</p>
             <p className="text-preset-one text-lime-custom">{toEur(monthlyRepayment)}</p>
          </div>
           <hr className="text-slate-300/25"/>
           <div className="flex flex-col gap-2">
             <p className="text-slate-300">Total you'll repay over the term</p>
             <p className="text-white text-preset-two">{toEur(totalRepayment)}</p>
           </div>
       </div>
    </section>
   );
}

export default Results
