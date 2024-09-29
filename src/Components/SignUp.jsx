// import { Fragment } from "react"
import { useState } from "react"


const SignUp =()=>{

    const [PhoneNumber, setPhoneNumber] = useState("")
    console.log(PhoneNumber)

    const [Password, setPassword] = useState("")
    console.log(Password)

    const [Name, setName] = useState("")
    console.log(Name)

    const [Date, setDate] = useState("")
    console.log(Date)




    return(
        <div className="mt-5 ml-5">
         <form>
         <input type="text" name="PhoneNumber" placeholder="...شماره همراه"onChange={(e)=>setPhoneNumber(e.target.value)} className=" d-rtl border border-solid border-gray p-3 rounded-xl w-60 shadow-md hover:shadow-purple-500 "></input>
         </form>

         <form className='mt-6'>
         <input type="password" name="password" placeholder="رمز ورود " onChange={(e)=>setPassword(e.target.value)} className="border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>
         </form>

         <form className='mt-6'>
         <input type="text" name="name" placeholder=" نام" onChange={(e)=>setName(e.target.value)} className="border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>
         </form>

         <form className='mt-6'>
         <input type="date" name="date" onChange={(e)=>setDate(e.target.value)} className="border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>
         </form>
        </div>
    )
}

export default SignUp