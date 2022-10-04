import { NavBar } from "../../ecommer/components/NavBar";

export const AuthLayout = ({ children, className, containerAuthClass }) => {
  return (
    <>
      <NavBar />
      <div
        className={`h-screen flex justify-center items-center bg-gray-50 px-4 md:px-0 ${className}`}
      >
        <div
          className={`max-w-sm w-full md:max-w-md lg:max-w-lg bg-white mx-auto shadow rounded-lg ${containerAuthClass}`}
        >
          <div className="p-6">{children}</div>
        </div>
      </div>
    </>
  );
};
