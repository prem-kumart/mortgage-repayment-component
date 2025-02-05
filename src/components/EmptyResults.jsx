

const EmptyResults = () => {
  return (
    <section className="flex-1 flex flex-col justify-center items-center gap-4 p-8 sm:p-10  sm:rounded-b-3xl lg:rounded-r-3xl  lg:rounded-bl-[60px] bg-slate-900">
       <img src="./assets/images/illustration-empty.svg" alt="Empty results Illustration" className="" />
       <h2 className="text-white text-preset-two">Results are shown here</h2>
       <p className="text-slate-300 text-preset-four text-center">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
    </section>
  )
}

export default EmptyResults
