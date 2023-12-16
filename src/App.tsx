import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import SignUp from "./views/SignUp.jsx";
import Home from "./views/Home.jsx";
import Dashboard from "./views/Dashboard.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    { path: "/dashboard", element: <Dashboard /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
