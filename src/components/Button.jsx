// eslint-disable-next-line react/prop-types
const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="rounded-full bg-gradient-to-r from-lime-green to-bright-cyan text-sm text-white bg-black py-2 px-6 cursor-pointer hover:opacity-70 transition-all"
    >
      {children}
    </button>
  );
};

export default Button;
