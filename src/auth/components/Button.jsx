export const Button = ({ children, className, ...props}) => {
  return (
    <button
      type="submit"
      className={`w-full bg-blue-500 px-4 py-1 mt-4 text-lg text-white cursor-pointer font-bold rounded hover:bg-blue-600 transition-all mx-auto ${className}}`}
    >
      {children}
    </button>
  );
};
