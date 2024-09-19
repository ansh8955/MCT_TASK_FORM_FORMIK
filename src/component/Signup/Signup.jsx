import { useFormik } from "formik";
import { SignupSchemas } from "../../Schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Signup() {
  const {
    values,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    errors,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchemas,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  function checkAllFields() {
    return (
      values.name &&
      values.email &&
      values.password &&
      values.confirm_password &&
      isValid
    );
  }

  return (
    <div className="w-4/5 mx-auto my-9 border flex rounded-md bg-white ">
      <div className="w-full lg:w-1/2 p-8 lg:p-20 border">
        <h1 className="text-xl text-red-900 font-extrabold mx-3">Welcome!</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col p-2 border text-sm m-3">
            <label
              htmlFor="name"
              className="w-full text-xs text-red-900 font-bold"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white text-black  outline-none px-4 py-2"
            />
            {errors.name && touched.name && (
              <p className="text-xs text-red-800">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col p-2 border text-sm m-3">
            <label
              htmlFor="email"
              className="w-full text-xs text-red-900 font-bold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white  text-black outline-none px-4 py-2"
            />
            {errors.email && touched.email && (
              <p className="text-xs text-red-800">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col p-2 border text-sm m-3">
            <label
              htmlFor="password"
              className="w-full text-xs text-red-900 font-bold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white text-black outline-none px-4 py-2"
            />
            {errors.password && touched.password && (
              <p className="text-xs text-red-800">{errors.password}</p>
            )}
          </div>
          <div className="flex flex-col p-2 border text-sm m-3">
            <label
              htmlFor="confirm_password"
              className="w-full text-xs text-red-900 font-bold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white text-black outline-none px-4 py-2"
            />
            {errors.confirm_password && touched.confirm_password && (
              <p className="text-xs text-red-800">{errors.confirm_password}</p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button
              disabled={!checkAllFields()}
              type="submit"
              className={`${
                !checkAllFields()
                  ? "bg-[#ccc] cursor-not-allowed"
                  : "bg-[#55311c] cursor-pointer"
              } w-2/3 lg:w-1/3 text-white py-2 rounded-md`}
              style={{ fontSize: "0.8rem" }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:block rounded-tr-md rounded-br-md overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="h-full"
        />
      </div>
    </div>
  );
}

export default Signup;
