// function Name(props)

export default function stepOne({
  title,
  type,
  accept,
  value,
  onChange,
  handleInputValue,
}) {
  const handleOnchange = (event) => {
    handleInputValue(event.target.value, title);
    // console.log(event.taget.value);
  };
  return (
    <div className="flex flex-col gap-1">
      <label className="text-black">
        {title} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        accept={accept}
        value={value}
        onChange={handleOnchange}
        placeholder={`${title} write...`}
        className="w-full p-3 border rounded-[8px] outline-none transition-all text-black "
      />
    </div>
  );
}
// export default Name;
