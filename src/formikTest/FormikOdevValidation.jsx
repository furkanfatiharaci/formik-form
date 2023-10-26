import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import './formik.css';


const validation = Yup.object().shape({
    name: Yup.string().required("Name Kısmı Boş Bırakılamaz"),
    unitPrice: Yup.number().min(0,'unitsInStock kısmı 0 dan küçük olamaz.').required(" unitPrice Kısmı Boş Bırakılamaz"),
    unitsInStock: Yup.number().required("unitsInStock Kısmı Boş Bırakılamaz"),
    quantityPerUnit: Yup.number().required("quantityPerUnit Kısmı Boş Bırakılamaz"),
    
})

function FormikOdevValidation() {

const formik = useFormik({
    initialValues:{
        name:'',
        unitPrice:'',
        unitsInStock:'',
        quantityPerUnit:'',
    },
    validationSchema:validation,

    onSubmit:(values) => {
        axios.post('https://northwind.vercel.app/api/products',values)
        .then(res=>{
            console.log('Success!');
        })
    }
})

  return (
   <form onSubmit={formik.handleSubmit}>
    <div>
        <label htmlFor="">Name</label>
        <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name ? <p style={{color:'red'}}>{formik.errors.name}</p> : <></>}
    </div>
    <div>
        <label htmlFor="">unitPrice</label>
        <input type="text" name='unitPrice' onChange={formik.handleChange} value={formik.values.unitPrice} />
        {formik.errors.unitPrice ? <p style={{color:'red'}}>{formik.errors.unitPrice}</p> : <></>}
    </div>
    <div>
        <label htmlFor="">unitsInStock</label>
        <input type="text" name='unitsInStock' onChange={formik.handleChange} value={formik.values.unitsInStock} />
        {formik.errors.unitsInStock ? <p style={{color:'red'}}>{formik.errors.unitsInStock}</p> : <></>}
    </div>
    <div>
        <label htmlFor=""> quantityPerUnit</label>
        <input type="text" name='quantityPerUnit' onChange={formik.handleChange} value={formik.values.quantityPerUnit} />
        {formik.errors.quantityPerUnit ? <p style={{color:'red'}}>{formik.errors.quantityPerUnit}</p> : <></>}
    </div>
    <div>
        <button type='submit'>Add</button>
    </div>
   </form>
  )
}

export default FormikOdevValidation