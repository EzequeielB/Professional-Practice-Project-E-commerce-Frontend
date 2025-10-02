import React from 'react';
import { Formik, Form } from 'formik';
import FormElement from './FormElement';
import styles from './styles/Form.module.css'

const DynamicForm = ({ elements, onSubmit, initialValues, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className={styles.formStyle}>
          {elements.map((el, idx) => (
            <FormElement key={idx} element={el} />
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
