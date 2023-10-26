//Formik Validetion işlemi yup ile //kullanıcı adı boş geçilemez vs işlemleri

// import { useFormik } from 'formik'
// import React from 'react'
// import * as Yup from 'yup';

// const AddValidationSchema = Yup.object().shape({
//     companyName: Yup.string().required("CompanyName Boş Bırakılamaz"),
//     contactName: Yup.string().required("contactName Boş Bırakılamaz"),
//     contactTitle: Yup.string().required("contactTitle Boş Bırakılamaz")
// })

// function FormikValidetion() {

    

//     const formik = useFormik({
//         initialValues: {
//             companyName:'',
//             contactName:'',
//             contactTitle:'',

//         },
//         validationSchema:AddValidationSchema,

//         onSubmit:(values)=>{
//             console.log(values)

//         }
//     })

//   return (
//     <>
// <form onSubmit={formik.handleSubmit}>
//     <div>
//         <label htmlFor="">CompanyName</label>
//         <input type="text" name='companyName' onChange={formik.handleChange} value={formik.values.companyName}  />
//         {formik.errors.companyName ? <p style={{color:'red'}}>{formik.errors.companyName}</p> : <></>}
//     </div>
//     <div>
//         <label htmlFor="">ContactName</label>
//         <input type="text" name='contactName' onChange={formik.handleChange} value={formik.values.contactName} /> 
//         {formik.errors.contactName ? <p style={{color:'red'}}>{formik.errors.contactName}</p> : <></>}
//     </div>
//     <div>
//         <label htmlFor="">Contacttitle</label>
//         <input type="text" name='contactTitle' onChange={formik.handleChange} value={formik.values.contactTitle}  />
//         {formik.errors.contactTitle ? <p style={{color:'red'}}>{formik.errors.contactTitle}</p> : <></>}
//     </div>
//     <div>
//         <button type='submit'>Add</button>
//     </div>

// </form>
//     </>
//   )
// }

// export default FormikValidetion