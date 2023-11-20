import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./pages/error404";
import TeamsPage from "./pages/teams/teamsPage";
import HomePage from "./pages/homePage";
import TeamsDetails from "./pages/teams/teamsDetailes";
import LoginPage from "./pages/login/loginPage";
import PrivateRoute from "./components/privateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "teams",
        element: <Suspense fallback={<div>Cargando...</div>}><TeamsPage /></Suspense>,
      },
      {
        path: "teams/:id",
        element: <TeamsDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
