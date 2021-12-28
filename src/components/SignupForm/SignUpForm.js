import styles from "./form.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignUpForm = () => {
  return (
    <div className={styles.containerMain}>
      <Formik
        initialValues={{ zarfiat: 0, namayeshi: 0 }}
        validate={(values) => {
          const errors = {};
          if (values.namayeshi < values.zarfiat) {
            errors.namayeshi = "ظرفیت نمایشی باید از ظرفیت کامل بیشتر باشد";
          }
          return errors;
        }}
      >
        <Form>
          <label>ظرفیت اصلی</label>
          <Field name="zarfiat" className="form-control"></Field>
          <ErrorMessage name="zarfiat"></ErrorMessage>
          <label>ظرفیت نمایشی</label>
          <Field name="namayeshi" className="form-control"></Field>
          <ErrorMessage name="namayeshi"></ErrorMessage>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
