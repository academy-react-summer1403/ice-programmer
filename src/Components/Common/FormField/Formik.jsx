// import React from 'react'
import { Form, Formik } from 'formik'
import TextField from './TextField'
import FileField from './FileField'
import CheckBoxField from './CheckBoxField'
import TextAreaField from './TextAreaField'


function FormikInput() {
  return (
    <div>
        <Formik>
            <Form>
                <TextField />
                <FileField />
                <CheckBoxField /> 
                <TextAreaField />  
            </Form>
        </Formik>
    </div>
  )
}

export default FormikInput