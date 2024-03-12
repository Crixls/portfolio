import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,

      children: [
        { index: true, element: <Home /> },
        // { path: "peliculas", element: <Products /> },
      ],
    },
   
  ]);
  return <RouterProvider router={router} />;
}

export default App
