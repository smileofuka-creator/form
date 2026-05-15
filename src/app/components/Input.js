// function Name(props)

export default function stepOne({
  title,
  type,
  accept,
  value,
  message,
  handleInputValue,
  error,
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
        style={error === true ? { border: "1px solid #E14942" } : null}
        type={type}
        accept={accept}
        value={value}
        onChange={handleOnchange}
        placeholder={`${title} write...`}
        className="w-full p-3 border rounded-[8px] outline-none transition-all text-black "
      />

      {error && <p className="text-red-500">{message}</p>}
    </div>
  );
}
// export default Name;
