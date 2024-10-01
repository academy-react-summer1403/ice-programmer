import { Field } from 'formik'
// import React from 'react'

function TextField({text},{...rest}) {
  return (
    <Field type={text} className=" ml-4 d-rtl border border-solid border-gray p-3 rounded-xl w-60 shadow-md hover:shadow-purple-500 "/>
  )
}

export default TextField