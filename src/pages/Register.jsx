import logo from "/images/logoIcon.svg";
import doctor from "/images/doctor2.png";
import { Link } from "react-router-dom";
import DatePicker from "@components/DatePicker";
import { FaMale, FaFemale } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@store/authSlice";
import InputField from "@components/InputField";
import Label from "@components/Label";

const Register = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    password: "",
    birth_date: "",
  });
  console.log(formData);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const token = useSelector((state) => state.auth.accessToken);

  console.log("isAuthenticated", isAuthenticated);
  console.log("token", token);
  console.log("Render - isLoading:", isLoading);

  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleDateChange = (date) => {
    if (date) {
      setFormData((prev) => ({
        ...prev,
        birth_date: date,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        birth_date: "",
      }));
    }
    setSelectedDate(date);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== passwordConfirmation) {
      alert("كلمة السر و تأكيد كلمة السر يجب أن يكونوا متطابقان");
      return;
    }

    dispatch(register(formData));
  };

  const GenderStandard = (
    <>
      <div>
        <p className="flex items-center gap-3 mt-1 text-gray-900">
          <FaMale className="text-xl text-third-color" />
          ذكر
        </p>
      </div>

      <InputField
        type="radio"
        name="gender"
        value="male"
        id="GenderStandard"
        onChange={handleChange}
        checked={formData.gender === "male"}
        className="invisible border-gray-300 text-primary-color size-5"
      />
    </>
  );

  const GenderPriority = (
    <>
      <div>
        <p className="flex items-center gap-3 mt-1 text-gray-900">
          <FaFemale className="text-xl text-third-color" />
          أنثى
        </p>
      </div>

      <InputField
        type="radio"
        name="gender"
        value="female"
        id="GenderPriority"
        onChange={handleChange}
        checked={formData.gender === "female"}
        className="invisible border-gray-300 text-primary-color size-5"
      />
    </>
  );

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
              onSubmit={handleRegister}
              className="grid grid-cols-6 gap-6 mt-8 font-gehili"
            >
              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="Name" value="الاسم" />
                <InputField
                  type="text"
                  id="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="Email" value="البريد الالكتروني" />

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

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="Phone" value="رقم التليفون" />

                <input
                  type="tel"
                  id="Phone"
                  required
                  name="phone"
                  pattern="0[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 text-sm bg-white border-2 rounded-md shadow-md outline-none text-primary-color border-primary-color english-numerals"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="Gender" value="النوع" />

                <fieldset id="Gender" className="grid grid-cols-6 gap-4">
                  <div className="w-full col-span-3">
                    <Label
                      htmlFor="GenderStandard"
                      className="flex cursor-pointer gap-4 rounded-lg border border-slate-700 bg-white p-3 text-sm font-medium shadow-sm hover:border-primary-color has-[:checked]:border-primary-color has-[:checked]:ring-1 has-[:checked]:ring-primary-color"
                      value={GenderStandard}
                    />
                  </div>

                  <div className="w-full col-span-3">
                    <Label
                      htmlFor="GenderPriority"
                      className="flex cursor-pointer gap-4 rounded-lg border border-slate-700 bg-white p-3 text-sm font-medium shadow-sm hover:border-primary-color has-[:checked]:border-primary-color has-[:checked]:ring-1 has-[:checked]:ring-primary-color"
                      value={GenderPriority}
                    />
                  </div>
                </fieldset>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="BirthDate" value="تاريخ الميلاد" />

                <DatePicker onDateSelect={handleDateChange} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="Address" value="العنوان" />

                <input
                  type="address"
                  required
                  id="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 text-sm bg-white border-2 rounded-md shadow-md outline-none text-primary-color border-primary-color"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="Password" value="كلمة السر" />

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

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="PasswordConfirmation" value="تأكيد كلمة السر" />

                <input
                  type="password"
                  required
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  value={passwordConfirmation}
                  onChange={handleConfirmationChange}
                  className="w-full p-3 mt-1 text-sm bg-white border-2 rounded-md shadow-md outline-none text-primary-color border-primary-color"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  disabled={isLoading}
                  className="inline-block px-12 py-3 text-base font-medium text-white transition border-2 rounded-md bg-primary-color border-primary-color shrink-0 hover:bg-transparent hover:text-primary-color focus:outline-none focus:ring active:text-primary-color disabled:bg-gray-400"
                >
                  {isLoading ? "إنشاء الحساب..." : "إنشاء الحساب"}
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  هل لديك حساب بالفعل ؟
                  <Link
                    to="/login"
                    className="underline text-primary-color ms-2"
                  >
                    تسجيل دخول
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

export default Register;
