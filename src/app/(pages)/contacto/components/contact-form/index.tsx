"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import styles from "./contact-form.module.css";
import { useCreateContact } from "@/src/core/hooks/useCreateContact";
import { ENV } from "@/src/core/config/env"; 

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre completo es obligatorio"),
  email: Yup.string().email("Ingresa un correo válido").nullable(),
  phone: Yup.string()
    .required("El teléfono es obligatorio")
    .test("is-valid-phone", "Número inválido", (val) =>
      val ? isValidPhoneNumber(val) : false,
    ),
  message: Yup.string().max(300, "Máximo 300 caracteres").nullable(),
});

interface ContactFormProps {
  isBrochureModal?: boolean;
}

export default function ContactForm({ isBrochureModal = false }: ContactFormProps) {
  const { status, submitContact } = useCreateContact();

  const handleDownloadBrochure = () => {
    if (ENV.BROCHURE_URL) {
      window.open(ENV.BROCHURE_URL, '_blank');
    } else {
      console.error("Falta configurar NEXT_PUBLIC_BROCHURE_URL en el .env");
    }
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", message: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await submitContact(values);
        
        // Si estamos en el modal, descargar el PDF al tener éxito
        if (isBrochureModal) {
          handleDownloadBrochure();
        }
        
        resetForm();
      } catch (error) {
        // El estado de error ya es manejado por el hook
      }
    },
  });

  return (
    <form className={styles.form__container} onSubmit={formik.handleSubmit}>
      <div className={styles.columns__wrapper}>
        <div className={styles.column__left}>
          <div className={styles.input__group}>
            <label htmlFor="name" className={styles.label}>Nombre completo</label>
            <div className={`${styles.input__wrapper} ${formik.touched.name && formik.errors.name ? styles.input__error : ""}`}>
              <input type="text" id="name" className={styles.input} placeholder="Tu nombre completo" {...formik.getFieldProps("name")} />
            </div>
            {formik.touched.name && formik.errors.name && <span className={styles.error__message}>{formik.errors.name}</span>}
          </div>

          <div className={styles.input__group}>
            <label htmlFor="email" className={styles.label}>Correo electrónico</label>
            <div className={`${styles.input__wrapper} ${formik.touched.email && formik.errors.email ? styles.input__error : ""}`}>
              <input type="email" id="email" className={styles.input} placeholder="tu@email.com" {...formik.getFieldProps("email")} />
            </div>
            {formik.touched.email && formik.errors.email && <span className={styles.error__message}>{formik.errors.email}</span>}
          </div>

          <div className={styles.input__group}>
            <label htmlFor="phone" className={styles.label}>Teléfono</label>
            <div className={`${styles.input__wrapper} ${formik.touched.phone && formik.errors.phone ? styles.input__error : ""}`}>
              <PhoneInput international defaultCountry="MX" placeholder="000 000 0000" limitMaxLength={true} value={formik.values.phone} onChange={(v) => formik.setFieldValue("phone", v)} onBlur={() => formik.setFieldTouched("phone", true)} className={styles.phone__lib__container} />
            </div>
            {formik.touched.phone && formik.errors.phone && <span className={styles.error__message}>{formik.errors.phone}</span>}
          </div>
        </div>

        <div className={styles.column__right}>
          <div className={styles.input__group} style={{ height: "100%" }}>
            <label htmlFor="message" className={styles.label}>Mensaje</label>
            <div className={`${styles.textarea__wrapper} ${formik.touched.message && formik.errors.message ? styles.input__error : ""}`}>
              <textarea id="message" className={styles.textarea} placeholder="Cuéntanos sobre tu interés en el proyecto" {...formik.getFieldProps("message")} />
            </div>
            <div style={{ textAlign: "right", fontSize: "12px", color: "#676861", width: "100%", marginTop: "4px" }}>
              {formik.values.message?.length || 0}/300
            </div>
          </div>
        </div>
      </div>

      {isBrochureModal && (
        <p style={{ marginTop: "20px", color: "#676861", fontSize: "14px" }}>
          Déjanos tus datos para descargar automáticamente el brochure digital.
        </p>
      )}

      <button type="submit" className={styles.submit__button} disabled={status === "loading" || status === "success"}>
        {status === "loading" ? "Enviando..." : status === "success" ? "¡Enviado!" : "Descargar brochure"}
      </button>
      
      {status === "error" && <p className={styles.status__error}>Error al enviar. Intenta de nuevo.</p>}
    </form>
  );
}