import React from "react";

export const UpdatePhoto = ({
  fileSelected,
  handleCancelUpdate,
  handleUpdateUser,
}) => {
  return (
    <div className="mb-3">
      <p className="flex justify-center gap-2 items-center">
        <i className="fa-solid fa-image"></i>
        <span className="text-slate-500 font-semibold">{fileSelected}</span>
      </p>
      <div className="flex gap-2 mt-3">
        <button
          className="bg-green-500 grow py-1 rounded-md text-white font-bold shadow hover:bg-green-600 transition-colors"
          onClick={handleUpdateUser}
        >
          ACTUALIZAR
        </button>
        <button
          className="bg-red-500 grow py-1 rounded-md text-white font-bold shadow hover:bg-red-600 transition-colors"
          onClick={handleCancelUpdate}
        >
          CANCELAR
        </button>
      </div>
    </div>
  );
};
