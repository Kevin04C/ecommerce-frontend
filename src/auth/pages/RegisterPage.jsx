import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { AuthLayout } from "../Layout/AuthLayout";
import {
  initalValuesRegister,
  validationSchemeRegister,
} from "../formik/schema";
import { Error } from "../components/Error";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterUser } from "../../store/auth/thunks";
import { ErrorAuth } from "../components/ErrorAuth";
import { Spinner } from "../components/Spinner";

export const RegisterPage = () => {

  const { errorMessage, status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(startRegisterUser(values));
  };

  return (
    <AuthLayout className="my-8 md:my-0" containerAuthClass="md:-mt-12">
      <div>
        <h2 className="text-3xl font-semibold my-3 mb-6">Registro</h2>

        <Formik
          initialValues={initalValuesRegister}
          validationSchema={validationSchemeRegister}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="md:grid grid-cols-2 gap-x-3">
              <div className="w-full mb-3">
                <label className="block mb-2 text-slate-500">DNI</label>
                <Field
                  type="number"
                  name="dni"
                  placeholder="DNI"
                  className="w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all"
                  value={values.dni}
                  autoComplete="off"
                />
                {errors.dni && touched.dni && <Error message={errors.dni} />}
              </div>
              <div className="w-full mb-3">
                <label className="block mb-2 text-slate-500">Nombre</label>
                <Field
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  className="w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all"
                  value={values.nombre}
                  autoComplete="off"
                />
                {errors.nombre && touched.nombre && (
                  <Error message={errors.nombre} />
                )}
              </div>
              <div className="w-full mb-3">
                <label className="block mb-2 text-slate-500">
                  Apellido Paterno
                </label>
                <Field
                  type="text"
                  name="apellidoPaterno"
                  placeholder="Apellido Paterno"
                  className="w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all"
                  value={values.apellidoPaterno}
                  autoComplete="off"
                />
                {errors.apellidoMaterno && touched.apellidoMaterno && (
                  <Error message={errors.apellidoPaterno} />
                )}
              </div>
              <div className="w-full mb-3">
                <label className="block mb-2 text-slate-500">
                  Apellido Materno
                </label>
                <Field
                  type="text"
                  name="apellidoMaterno"
                  placeholder="Apellido Materno"
                  className="w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all"
                  value={values.apellidoMaterno}
                  autoComplete="off"
                />
                {errors.apellidoMaterno && touched.apellidoMaterno && (
                  <Error message={errors.apellidoMaterno} />
                )}
              </div>
              <div className="w-full">
                <label className="block mb-2 text-slate-500">Email</label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all"
                  value={values.email}
                  autoComplete="off"
                />
                {errors.email && touched.email && (
                  <Error message={errors.email} />
                )}
              </div>
              <div className="w-full">
                <label className="block mb-2 text-slate-500">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all"
                  value={values.password}
                  autoComplete="off"
                />
                {errors.password && touched.password && (
                  <Error message={errors.password} />
                )}
              </div>
              {
                !!errorMessage && <ErrorAuth message={errorMessage}/>
              }
              {
                status === "checking" 
                ? <Spinner />
                : <Button className="col-span-full w-full">Registrame</Button>
              }
            </Form>
          )}
        </Formik>
        <div className="flex justify-between mt-7">
          <p className="text-slate-500">¿Ya tienes una cuenta?</p>
          <Link
            to="/auth/login"
            className="text-blue-500 font-semibold hover:underline underline-offset-1"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
