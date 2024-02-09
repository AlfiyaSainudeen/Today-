import React, { useState } from 'react';
import { isEmail } from 'validator';
// Custom hook for form validation
function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic
    }
  };
 
  return { values, handleChange, handleSubmit, errors };
}
 
// Example usage
function MyForm() {
  const { values, handleChange, handleSubmit, errors } = useFormValidation(
    { username: '', password: '' ,email:''},
    validateForm
  );
 
  function validateForm(values) {
    let errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Email is required';
    }
    if (!values.email) {
        errors.email = 'Password is required';
      }
    return errors;
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={values.username} onChange={handleChange} />
      {errors.username && <p>{errors.username}</p>}
      <input type="email" name="email" value={values.email} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}
      
      <input type="password" name="password" value={values.password} onChange={handleChange} />
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
 
export default MyForm;