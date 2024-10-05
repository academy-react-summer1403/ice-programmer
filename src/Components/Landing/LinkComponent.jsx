import { Field, Form, Formik } from 'formik'
// import React from 'react'

function LinkComponent({topic, id}) {
  return (
    <div>
        <Formik initialValues={{sortGroup:''}}>
            <Form>
                <Field id={id} type="radio" name="sortGroup" className=' hidden []'/> 
                <label htmlFor={id} className='cursor-pointer checked:[text-[red] font-bold]'>{topic}</label>
            </Form>
        </Formik>
        
    </div>
  )
}

export default LinkComponent