import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Support from "./pages/Support";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import ErrorRouter from "./ui/ErrorRouter";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorRouter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
