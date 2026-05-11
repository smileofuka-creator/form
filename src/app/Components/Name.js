// function Name(props)

export default function Name({ title, value, onChange, errorMessage }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-black">
        {title} <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`${title} write...`}
        className={`w-full p-3 border rounded-[8px] outline-none transition-all text-black ${
          errorMessage
            ? "border-red-500"
            : "border-[#E1E1E1] focus:border-black"
        }`}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
// export default Name;
