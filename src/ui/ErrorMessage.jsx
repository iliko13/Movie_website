import { BiError } from "react-icons/bi";

function ErrorMessage({ message }) {
  return (
    <div className="flex h-80  select-none items-center justify-center rounded-3xl border-4 border-solid border-red-200 bg-red-100  ">
      <div className="flex flex-col items-center justify-center gap-10">
        <BiError className="text-9xl text-red-600" />
        <p className="text-5xl text-red-600">{message}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
