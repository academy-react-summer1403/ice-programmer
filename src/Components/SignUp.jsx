// import { Fragment } from "react"
import { useState } from "react"
import {Formik, Form} from 'formik';


const SignUp =()=>{

    const [PhoneNumber, setPhoneNumber] = useState("")
    console.log(PhoneNumber)

    const [Password, setPassword] = useState("")
    console.log(Password)

    const [Name, setName] = useState("")
    console.log(Name)

    const [Date, setDate] = useState("")
    console.log(Date)

    const onSubmit =(event)=>{
        event.preventDefault();
        console.log('Form submited', Password, Name, Date, PhoneNumber)
    }


    return(
        <div className="mt-5 ml-5">
            <Formik>
                <Form>
                    <input 
                    type="text" 
                    name="PhoneNumber" 
                    placeholder="...شماره همراه"
                    value={PhoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    className=" ml-4 d-rtl border border-solid border-gray p-3 rounded-xl w-60 shadow-md hover:shadow-purple-500 "></input>
                    
                
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="رمز ورود " 
                    value={Password}
                    onChange={(e)=>setPassword(e.target.value)} 
                    className="ml-4 border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>
                    
                    <input 
                    type="text" 
                    name="name" 
                    placeholder=" نام" 
                    value={Name}
                    onChange={(e)=>setName(e.target.value)}
                    className="ml-4 border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>
                    
                    <input 
                    type="date" 
                    name="date" 
                    value={Date}
                    onChange={(e)=>setDate(e.target.value)}
                    className="ml-4 border border-solid border-gray p-3 rounded-xl w-60 shadow-md "></input>

                    <button type='Submit'>Submit</button>
                </Form>
            </Formik>
        
        </div>
    )
}

export default SignUp