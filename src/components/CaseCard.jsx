/* eslint-disable react/prop-types */
const CaseCard = ({ image, CardDescription, CardTitle }) => {
  return (
    <div className="mb-10 overflow-hidden duration-300 bg-white rounded-lg shadow-md hover:shadow-lg h-fit">
      <img src={image} alt="" className="w-full" />
      <div className="p-8 text-right sm:p-9 md:p-7 xl:p-9 font-gehili">
        <h3 className="text-lg font-bold">{CardTitle}</h3>
        <p className="text-base leading-relaxed text-body-color">
          {CardDescription}
        </p>
      </div>
    </div>
  );
};

export default CaseCard;
