"use client"
//External Libraries
import * as Yup from "yup";
import { useFormik } from 'formik'


import styles from './brochure-form.module.css'
import { Button } from "@/src/app/components";

const validationSchema = Yup.object({
    email: Yup.string().email("Ingresa un correo válido").required('El correo electrónico es obligatorio'),
});

export default function BrochureForm() {

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }

    })
    return (
        <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
            <ul className={styles.inputs__list}>
                <li className={styles.input__item}>
                    <div
                        className={`${styles.input__wrapper} ${formik.touched.email && formik.errors.email ? styles.input__error : ""
                            }`}
                    >
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            placeholder="tu@email.com"
                            {...formik.getFieldProps("email")}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                        <span className={styles.error__message}>{formik.errors.email}</span>
                    )}

                </li>

            </ul>


            <Button
                type="submit"
                className={styles.submit__button}
                // disabled={status === "loading" || status === "success"}
            >
                Descargar brochure
            </Button>
        </form>
    )
}