export default function Spinner({ className }) {
  return (
    <div
      className={
        "grid-1 my-auto h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2 " +
        className
      }
    ></div>
  );
}
