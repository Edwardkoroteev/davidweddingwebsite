export default function Button({ text = undefined, onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={
        "text-white text-sm sm:text-base h-max bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-md duration-300 w-max p-2 px-4 cursor-pointer hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.25)] " +
        className
      }
    >
      {text || children}
    </button>
  );
}
