import { Field } from "formik"

function CheckBoxField({...rest}) {
  return (
    <Field 
    type='checkBox'
    name={}
    {...rest}
     className='border'/>
  )
}

export default CheckBoxField