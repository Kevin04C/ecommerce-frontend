export const ErrorAuth = ({ message }) => {
  return (
    <div className="bg-red-100 flex justify-center items-center gap-1 mt-4 rounded p-2 col-span-2">
      <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
      <p className="text-red-700 font-semibold">{message}</p>
    </div>
  );
};
