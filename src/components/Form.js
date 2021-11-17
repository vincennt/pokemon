import { useFormik } from 'formik'
import * as Yup from 'yup'

const Form =()=>{

  const formik = useFormik({
  initialValues: {
      username: "",
      password: ""
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .max(15, "Username est trop court")
        .required("Username est requis"),
      password: Yup.string()
        .required("Password required")
        .min(6, "Password too short")
    }),
    // validateOnChange: false
  })

  console.log(formik.errors)
   return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="enter username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      {formik.errors.username && <p>{formik.errors.username}</p>}
      <br />
      <input
        type="password"
        name="password"
        placeholder="enter password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      {formik.errors.password && <p>{formik.errors.password}</p>}
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

  export default Form