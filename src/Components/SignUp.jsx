// import { Fragment } from "react"
import { useState } from "react"
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';


const SignUp =()=>{

    const validations = yup.object().shape({
        phoneNumber:yup.string().required("شماره تماس ضروری است"),
        password:yup.string().required("این فیلد اجباری است"),
        name:yup.string().required("این فیلد اجباری است"),
        date:yup.string().required("این فیلد اجباری است")
    })

    const onSubmit =(values)=>{
        console.log('Form submited', values)
    }


    return(
        <div className="mt-5 ml-5">
            <Formik 
            initialValues={{phoneNumber:'', password:'', name:'', date:''}} 
            onSubmit={(values)=>onSubmit(values)}
            validationSchema={validations}>
            
                <Form className="">
                    <Field 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="...شماره همراه"
                    className=" ml-4 d-rtl border border-solid border-gray p-3 rounded-xl w-60 shadow-md hover:shadow-purple-500 " />
                    <ErrorMessage name="phoneNumber" component={'p'} className=""/>

                    <Field 
                    type="password" 
                    name="password" 
                    placeholder="رمز ورود "
                    className="ml-4 border border-solid border-gray p-3 rounded-xl w-60 shadow-md " />
                    <ErrorMessage name="password" component={'p'} />

                    <Field 
                    type="text" 
                    name="name" 
                    placeholder=" نام" 
                    className="ml-4 border border-solid border-gray p-3 rounded-xl w-60 shadow-md "/>
                    <ErrorMessage name="name" component={'p'}/>

                    <Field 
                    type="date" 
                    name="date" 
                    className="ml-4 border border-solid border-gray p-3 rounded-xl w-60 shadow-md "/>
                    <ErrorMessage name="date" component={'p'}/>

                    <button type='Submit'>Submit</button>
                </Form>
            </Formik>
        
        </div>
    )
}

export default SignUp