import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../layout/Layout';

const Login = () => {
  
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = data => {
    console.log(data);
  }
  
  return (
    <Layout>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input 
            type="text" 
            className={errors?.firstName ? "is-invalid form-control" : "form-control"}
            {...register("firstName", {required: true},)}
          />
          <div className="invalid-feedback">
            {errors.firstName && errors.firstName.type === "required" && "form harus diisi"}
          </div>
        </div>
        <input type="submit" />
      </form>
    </Layout>
  );
};

export default Login;