import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="relative z-10 bg-primary-color flex items-center justify-center  w-full min-h-[calc(100vh-70px)]">
        <div className="container flex items-center justify-center mx-auto">
          <div className="flex items-center justify-center -mx-4">
            <div className="flex items-center justify-center w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="my-8 text-[22px] font-semibold leading-tight text-white">
                  لا توجد هذه الصفحة
                </h4>
                <Link
                  to="/"
                  className="inline-block px-8 py-3 mt-6 text-base font-semibold text-center text-white border border-white rounded-lg transition-default duration-default hover:bg-white hover:text-primary-color font-gehili"
                >
                  الصفحة الرئيسية
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex w-1/3 h-full">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </>
  );
};

export default Error;
