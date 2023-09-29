import { useNavigate, useRouteError } from "react-router-dom";

function ErrorRouter() {
  const navigate = useNavigate();
  const { error } = useRouteError();
  console.log(error);

  return (
    <div className="m-9 flex h-80 select-none items-center justify-center rounded-3xl border-4 border-solid border-red-200 bg-red-100">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl text-red-600 md:text-4xl lg:text-6xl">
          Something went wrong !
        </h1>
        <p className="text-xl md:text-2xl">{error.message}</p>
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg border-2 border-red-600 px-4 py-2 transition-all duration-300 hover:bg-red-500 hover:text-stone-100 hover:shadow-2xl hover:shadow-red-900"
        >
          &larr; Go back
        </button>
      </div>
    </div>
  );
}

export default ErrorRouter;
