/* eslint-disable react/prop-types */


const Button = ({buttonName,buttonType}) => {
  return (
    <button type={buttonType == 'submit' ? "submit" :""} className=" sm:self-start flex flex-row justify-center items-center gap-2 bg-lime-400 rounded-4xl p-4">
            <img src="/assets/images/icon-calculator.svg" alt="calculator Image"/>
            <span className="text-preset-three">{buttonName}</span>
    </button>
  )
}

export default Button
