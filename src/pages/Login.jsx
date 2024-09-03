import logo from "/images/logoIcon.svg";
import doctor from "/images/doctor2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@store/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const token = useSelector((state) => state.auth.token);

  console.log("isAuthenticated", isAuthenticated);
  console.log("token", token);
  console.log("Render - isLoading:", isLoading);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  return (
    <section className="px-4 pt-2 mx-auto bg-white sm:px-6 lg:px-8">
      <div className="md:grid lg:min-h-screen md:grid-cols-12">
        <aside className="relative hidden h-0 px-12 py-2 md:block bg-primary-color rounded-default md:order-last md:col-span-5 md:h-full">
          <img
            alt=""
            src={doctor}
            className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[95%] h-full"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 md:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link className="flex items-center gap-6" href="#">
              <img src={logo} alt="" className="w-2/12" />

              <h1 className="mt-6 text-2xl leading-10 text-primary-color sm:text-3xl">
                <span className="block pb-5 font-gehili">
                  أهلا بكم في عيادات
                </span>
                د/ أحمد محمد
              </h1>
            </Link>

            <p className="mt-4 leading-relaxed text-slate-600 font-gehili">
              سجل حسابك الآن في عيادات د/ أحمد محمد و استمتع بخدمات العيادة
              الإلكترونية
            </p>

            <form
              onSubmit={handleLogin}
              className="grid grid-cols-6 gap-6 mt-8 font-gehili"
            >
              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-slate-800"
                >
                  البريد الالكتروني
                </label>

                <input
                  type="email"
                  id="Email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 text-sm bg-white border-2 rounded-md shadow-md outline-none text-primary-color border-primary-color"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-slate-800"
                >
                  كلمة السر
                </label>

                <input
                  type="password"
                  required
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 text-sm bg-white border-2 rounded-md shadow-md outline-none text-primary-color border-primary-color"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  disabled={isLoading}
                  className="inline-block px-12 py-3 text-base font-medium text-white transition border-2 rounded-md bg-primary-color border-primary-color shrink-0 hover:bg-transparent hover:text-primary-color focus:outline-none focus:ring active:text-primary-color disabled:bg-gray-400"
                >
                  {isLoading ? " تسجيل دخول..." : "تسجيل دخول"}
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  ليس لديك حساب ؟
                  <Link
                    to="/register"
                    className="underline text-primary-color ms-2"
                  >
                    إنشاء حساب
                  </Link>
                  .
                </p>
              </div>
            </form>
            {/* {error && (
              <p className="p-2 mt-5 text-center bg-red-800 rounded-sm bg-opacity-80 text-slate-50 font-gehili">
                {error}
              </p>
            )} */}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
