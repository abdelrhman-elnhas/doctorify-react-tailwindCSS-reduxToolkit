/* eslint-disable react/prop-types */
const PageHeader = ({ image, title, desc }) => {
  return (
    <section className="max-w-screen-xl px-4 pt-2 mx-auto sm:px-6 lg:px-8">
      <div className="relative py-24 overflow-hidden bg-gray-900 sm:py-32 rounded-default isolate font-gehili">
        <img
          alt=""
          src={image}
          className="absolute inset-0 object-cover object-center w-full h-full -z-10"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 -z-10 bg-primary-color"></div>
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary-color to-slate-600 opacity-70"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-slate-700 to-primary-color opacity-60"
          />
        </div>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
