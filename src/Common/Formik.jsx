// import React from 'react'
import { Formik } from 'formik'
import TextField from './TextField'
import TextArea from './TextArea'

function FormikInput() {
  return (
    <div>
        <Formik>
        <TextField />
        <TextArea />
        </Formik>
    </div>
  )
}

export default FormikInput