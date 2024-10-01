import { Field } from "formik"

function TextArea({textArea}) {
  return (
    <Field type={textArea} className=" ml-4 d-rtl border border-solid border-gray p-3 rounded-xl w-60 shadow-md hover:shadow-purple-500 "/>
  )
}

export default TextArea