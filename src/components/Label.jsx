/* eslint-disable react/prop-types */
const Label = ({ htmlFor, value, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={
        className ? className : "block text-base font-medium text-slate-800 "
      }
    >
      {value}
    </label>
  );
};

export default Label;
