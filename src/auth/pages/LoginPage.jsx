import React from "react";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validationSchemeLogin, initalValuesLogin } from "../formik/schema";
import { AuthLayout } from "../Layout/AuthLayout";
import { Error } from "../components/Error";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { startLoginUser } from "../../store/auth/thunks";
import { ErrorAuth } from "../components/ErrorAuth";
import { Spinner } from "../components/Spinner";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { errorMessage, status } = useSelector((state) => state.auth);

  const handleSubmit = (values) => {
    dispatch(startLoginUser(values));
  };

  return (
    <AuthLayout containerAuthClass="-mt-10">
      <h2 className="text-3xl font-semibold my-3">Iniciar sesión</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initalValuesLogin}
        validationSchema={validationSchemeLogin}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-slate-500">
                Email
              </label>
              <Field
                type="text"
                name="email"
                autoComplete="off"
                className={`w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all ${
                  errors.email && touched.email && "border-red-500"
                }`}
                placeholder="correo"
                value={values.email}
              />
              {errors.email && touched.email && (
                <Error message={errors.email} />
              )}
            </div>
            <div className="">
              <label htmlFor="password" className="block mb-2 text-slate-500">
                Password
              </label>
              <Field
                type="password"
                name="password"
                autoComplete="off"
                className={`w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all ${
                  errors.password && touched.password && "border-red-500"
                }`}
                placeholder="password"
                value={values.password}
              />
              {errors.password && touched.password && (
                <Error message={errors.password} />
              )}
              {!!errorMessage && <ErrorAuth message={errorMessage} />}
            </div>

            {status === "checking" ? <Spinner /> : <Button>Ingresar</Button>}

            <div className="flex justify-between mt-7">
              <p className="text-slate-500">¿Aún no tienes cuenta?</p>
              <Link
                to="/auth/register"
                className="text-blue-500 font-semibold hover:underline underline-offset-1"
              >
                Crear cuenta
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};
