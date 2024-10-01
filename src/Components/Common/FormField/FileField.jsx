import { Field } from "formik"

function FileField({...rest}) {
  return (
    <Field 
    type='file'
    name={}
    {...rest}
    className=" ml-4 d-rtl border border-solid border-gray p-3 rounded-xl w-60 shadow-md "/>
  )
}

export default FileField