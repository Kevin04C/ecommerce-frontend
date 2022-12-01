import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../auth/components/Button";
import { validationSchemeUpdateProfile } from "../../formik/schema";
import { startUpdatePhoto, StartUpdateUser } from "../../store/auth/thunks";
import { InputForm } from "../components/InputForm";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";
import { Error } from "../../auth/components/Error";
import { useRef } from "react";
import { useState } from "react";
import { UpdatePhoto } from "../components/UpdatePhoto";
import { validateZise } from "../helpers/validateZise";
import { useEffect } from "react";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.auth);
  const [fileSelected, setFileSelected] = useState("");
  const { secure_url, updatingPhoto, errorUpdatePhoto } = useSelector(
    (state) => state.auth
  );
  const fileRef = useRef();

  const handleUpdatePhotoUser = () => {
    const [photo] = fileRef.current.files;
    if (validateZise(photo)) {
      toast.error(
        <p>
          La imagen <b>{photo.name}</b> no puede pasar de los 3MB
        </p>
      );
      return;
    }
    dispatch(startUpdatePhoto(photo));
    setFileSelected("");
  };

  const handleUpdateUser = (data) => {
    dispatch(StartUpdateUser(data));
  }

  const handleChange = () => {
    const [photo] = fileRef.current.files;
    setFileSelected(photo?.name);
  };

  const handleClickFile = () => fileRef.current.click();
  const handleCancelUpdate = () => {
    setFileSelected("");
  };

  useEffect(() => {
    if (!!errorUpdatePhoto) {
      toast.error(errorUpdatePhoto);
    }
  }, [errorUpdatePhoto]);

  return (
    <>
      <LayoutEcommerce>
        <section className="my-10 w-full">
          <h3 className="text-xl md:text-3xl font-bold mb-3 text-gray-800">
            Mis datos personales
          </h3>
          <hr />

          <Formik
            initialValues={form}
            onSubmit={handleUpdateUser  }
            validationSchema={validationSchemeUpdateProfile}
          >
            {({ values, errors }) => (
              <Form className="w-full bg-white px-4 py-5 rounded-lg shadow-sm mt-5">
                <div className="md:grid grid-cols-3 gap-10">
                  <div className="col-span-1 mb-8 md:mb-0">
                    <figure className="mb-4">
                      <img
                        src={secure_url}
                        alt={form.nombre}
                        className="block w-2/3 mx-auto rounded-full"
                      />
                      <figcaption className="text-center mt-2 font-bold text-2xl md:text-3xl text-slate-800">
                        {form.nombre}
                      </figcaption>
                    </figure>
                    <input
                      type="file"
                      ref={fileRef}
                      accept="image/png, image/jpg, image/jpge"
                      name="photo"
                      onChange={handleChange}
                      hidden
                    />
                    {updatingPhoto && (
                      <span className="text-slate-500 font-medium">
                        Subiendo imágen...
                      </span>
                    )}

                    {!!errorUpdatePhoto && (
                      <span className="text-red-500 font-medium text-sm">
                        {errorUpdatePhoto}
                      </span>
                    )}

                    {fileSelected ? (
                      <UpdatePhoto
                        fileSelected={fileSelected}
                        handleCancelUpdate={handleCancelUpdate}
                        handleUpdateUser={handleUpdatePhotoUser}
                      />
                    ) : (
                      <div>
                        <button
                          className={`bg-red-600 w-full rounded py-1 text-white font-bold text-lg hover:bg-red-700 transition-colors ${
                            updatingPhoto && "grayscale mt-3"
                          }`}
                          onClick={handleClickFile}
                          disabled={updatingPhoto}
                        >
                          CAMBIAR FOTO
                        </button>
                        <span className="text-red-400 font-medium text-xs">
                          *La imágen no deben superar los 2MB*
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="col-span-2">
                    <div className="md:grid grid-cols-2 gap-3">
                      <div className="mb-3">
                        <InputForm
                          typeInput="text"
                          nameInput="nombre"
                          valueInput={values.nombre}
                          labelText="Nombre"
                        />
                        {errors.nombre && <Error message={errors.nombre} />}
                      </div>
                      <div className="mb-3">
                        <InputForm
                          typeInput="number"
                          nameInput="dni"
                          isReadOnly={true}
                          valueInput={values.dni}
                          labelText="DNI"
                        />
                      </div>
                      <div className="mb-3">
                        <InputForm
                          typeInput="text"
                          nameInput="email"
                          isReadOnly={true}
                          valueInput={values.email}
                          labelText="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <InputForm
                          typeInput="text"
                          nameInput="apellidoPaterno"
                          valueInput={values.apellidoPaterno}
                          labelText="Apellido Paterno"
                        />
                      </div>
                      <div className="mb-3">
                        <InputForm
                          typeInput="text"
                          nameInput="apellidoMaterno"
                          valueInput={values.apellidoMaterno}
                          labelText="Apellido Materno"
                        />
                      </div>
                      <div className="mb-3">
                        <InputForm
                          typeInput="text"
                          nameInput="direccion"
                          valueInput={values.direccion || ""}
                          labelText="Dirección"
                        />
                      </div>
                      <div className="mb-3">
                        <InputForm
                          typeInput="number"
                          nameInput="contacto1"
                          valueInput={values.contacto1 || ""}
                          labelText="Teléfono 1"
                        />
                      </div>
                      <div>
                        <InputForm
                          typeInput="number"
                          nameInput="contacto2"
                          valueInput={values.contacto2 || ""}
                          labelText="Teléfono 2 (Opcional)"
                        />
                      </div>
                      <Button className="col-span-2 w-full">
                        GUARDAR DATOS
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </LayoutEcommerce>
    </>
  );
};
