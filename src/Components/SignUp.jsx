// import { Fragment } from "react"


const SignUp =()=>{
    return(
        <div className="mt-5 ml-5">
         <form>
         <input type="text" placeholder="...شماره همراه" className=" d-rtl border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>
         </form>

         <form className='mt-6'>
         <input type="password" placeholder="رمز ورود " className="border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>
         </form>

         <form className='mt-6'>
         <input type="text" placeholder=" نام" className="border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>
         </form>

         <form className='mt-6'>
         <input type="date" className="border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>
         </form>
        </div>
    )
}

export default SignUp