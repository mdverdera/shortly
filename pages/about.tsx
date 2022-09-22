import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
});

const About = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" className="border border-blue-400" />
          <ErrorMessage name="name" />
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" className="border border-blue-400" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default About;
