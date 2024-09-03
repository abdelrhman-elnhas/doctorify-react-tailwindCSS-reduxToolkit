import { useNavigate } from "react-router-dom";
import doctorImage from "/images/doctor2.png";
import { IoIosArrowBack } from "react-icons/io";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center max-w-screen-xl px-4 pt-2 mx-auto sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-center justify-center w-full min-h-[calc(100vh-85px)] px-10 overflow-hidden bg-center bg-cover bg-hero-bg rounded-default md:flex-row">
        {/* Overlay for the background */}
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-primary-color-75"></div>

        {/* Content section */}
        <div className="z-20 flex flex-col items-center justify-center w-full gap-4 py-10 md:items-start heroContent md:w-6/12">
          <h3 className="pb-1 text-2xl text-white md:pb-4 font-gehili md:text-3xl">
            أهلا بكم في عيادات
          </h3>
          <h1 className="text-xl text-white sm:text-2xl md:text-4xl">
            د/ أحمد محمد
          </h1>
          <ul className="flex flex-col justify-center text-base text-white font-gehili md:text-lg">
            <li> دكتوراه جراحة عظام الحوض التحفظية في الأطفال</li>
            <li>دكتوراه حراحات العمود الفقري، كلية طب جامعة القاهرة</li>
            <li>زميل الأكاديمية الأمريكية لجراحة العظام منذ العام 2004.</li>
          </ul>
          <button
            className="flex items-center justify-between px-5 py-2 mt-4 text-lg bg-white rounded-sm transition-default duration-default hover:bg-secondary-color hover:text-white text-primary-color font-gehili md:text-2xl"
            onClick={() => navigate("/book")}
          >
            احجز موعدك الآن
            <IoIosArrowBack />
          </button>
        </div>

        {/* Doctor image */}
        <div className="relative z-20 w-8/12 mt-4 md:mt-0 md:w-4/12 md:min-h-[calc(100vh-85px)]">
          <img
            src={doctorImage}
            alt="Dr/ Ahmed Mohammed"
            className="relative bottom-0 left-0 object-cover w-full md:absolute "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
