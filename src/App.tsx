import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";

import "./App.css";

import SignUp from "./views/SignUp.tsx";
import SignIn from "./views/SignIn.tsx";
import Home from "./views/Home.jsx";
import Dashboard from "./views/Dashboard.tsx";

function App() {
  const { user, setUser } = useAuth();

  const loader = async () => {
    if (user) {
      return redirect("/dashboard");
    }
    return null;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
