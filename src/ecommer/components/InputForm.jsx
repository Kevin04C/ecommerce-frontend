import { Field } from "formik";
import React from "react";

export const InputForm = ({
  nameInput,
  valueInput,
  typeInput,
  placeholderInput,
  isReadOnly,
  labelText
}) => {
  return (
    <>
      <label className="block mb-2 text-slate-500 text-sm">
        {labelText}
      </label>
      <Field
        type={typeInput}
        autoComplete="off"
        name={nameInput}
        placeholder={placeholderInput}
        value={valueInput}
        className={`w-full p-2 outline-none bg-gray-50 border rounded-lg transition-all ${isReadOnly && "border-green-400" }`}
        readOnly={isReadOnly}
      />
    </>
  );
};

