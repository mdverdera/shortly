import React from "react";
import { Formik, Form, Field } from "formik";

// Shape of form values
interface FormValues {
  email: string;
  username: string;
}

const validateEmail = (value: FormValues) => {
  let error;
  if (!value.email) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    error = "Invalid email address";
  }
  return error;
};

function validateUsername(value: FormValues) {
  let error;
  if (value.username === "admin") {
    error = "Nice try!";
  }
  return error;
}

const FieldLevelValidationExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: "",
        email: "",
      }}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, validateField, validateForm }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            validate={validateEmail}
            className="border border-blue-400"
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <label htmlFor="username">Username</label>
          <Field
            name="username"
            validate={validateUsername}
            className="border border-blue-400"
          />
          {errors.username && touched.username && <div>{errors.username}</div>}
          {/** Trigger field-level validation
           imperatively */}
          <button
            type="button"
            onClick={() => validateField("username")}
            className="block"
          >
            Check Username
          </button>
          {/** Trigger form-level validation
           imperatively */}
          <button
            type="button"
            onClick={() => validateForm().then(() => console.log("blah"))}
            className="block"
          >
            Validate All
          </button>
          <button type="submit" className="block">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FieldLevelValidationExample;
