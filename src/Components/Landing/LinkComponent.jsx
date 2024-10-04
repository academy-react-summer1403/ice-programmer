import { Field, Formik } from 'formik'
// import React from 'react'

function LinkComponent({topic}) {
  return (
    <div>
        <Formik>
            <Field id='asa' type="radio" name="sortGroup" className=' hidden' checked /> 
        </Formik>
        <label htmlFor='asa' className='cursor-pointer checked:[color-red_font-bold]'>{topic}</label>
    </div>
  )
}

export default LinkComponent