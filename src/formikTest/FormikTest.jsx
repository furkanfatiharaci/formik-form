// Formik base hali en sade kullanımı 

// import React from 'react'
// import {useFormik} from 'formik'
// import axios from 'axios'

// function FormikTest() {

// const formik = useFormik({
//     initialValues: {
//         name:'',
//         description:'',
//     },
//     onSubmit: (values) => {
        
//         axios.post('https://northwind.vercel.app/api/categories',values)
//         .then(res =>{
//             console.log('Succes!');
//         })
//     }
// })


//   return (
//     <form onSubmit={formik.handleSubmit}>
//         <div>
//             <label htmlFor="">Name : </label>
//             <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} />
//         </div>
//         <div>
//             <label htmlFor="">Desciption</label>
//             <input type="text" name='description' onChange={formik.handleChange} value={formik.values.description} />
//         </div>
//         <div>
//             <button type='submit'>Add</button>
//         </div>

//     </form>
//   )
// }

// export default FormikTest