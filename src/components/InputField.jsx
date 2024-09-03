/* eslint-disable react/prop-types */
const InputField = ({
  type,
  id,
  name,
  value,
  className,
  onChange,
  checked,
}) => {
  return (
    <input
      type={type}
      id={id}
      required
      name={name}
      value={value}
      onChange={onChange}
      className={
        className
          ? className
          : "w-full p-3 mt-1 text-sm bg-white border-2 rounded-md shadow-md outline-none text-primary-color border-primary-color"
      }
      checked={checked && checked}
    />
  );
};

export default InputField;
