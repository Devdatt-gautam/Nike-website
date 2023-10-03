const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  FullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor} `
          : "bg-coral-red text-white border-coral-red"
      }
      ${FullWidth && "w-full"}
      `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="right arrow icon"
          className="ml-2 rounded-fullw-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
