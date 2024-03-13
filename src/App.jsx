import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProyectsPage from "./pages/ProyectsPage";
import ProyectsTwo from "./pages/ProyectsTwo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,

      children: [
        { index: true, element: <Home /> },
        { path: "proyects", element: <ProyectsPage /> },
        { path: "proyectsTwo", element: <ProyectsTwo /> },

      ],
    },
   
  ]);
  return <RouterProvider router={router} />;
}

export default App
