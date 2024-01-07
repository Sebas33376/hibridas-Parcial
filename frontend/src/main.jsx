import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./pages/error404";
import TeamsPage from "./pages/teams/teamsPage";
import HomePage from "./pages/homePage";
import TeamsDetails from "./pages/teams/teamsDetailes";
import LoginPage from "./pages/login/loginPage";
import ProfilePage from "./pages/profile/profilePage";
import PrivateRoute from "./components/privateRoute";
import AuthSelecction from "./pages/authSelecction/AuthSelecction";
import RegisterPage from "./pages/register/RegisterPage";
import MyTeamsPage from "./pages/myTeams/myTeamsPage";
import OrganizePage from "./pages/organize/organizePage";
import HistoryPage from "./pages/history/historyPage";

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
        path: "Teams",
        element: <Suspense fallback={<div>Cargando...</div>}><TeamsPage /></Suspense>,
      },
      {
        path: "Profile",
        element: <ProfilePage />,
      },
      {
        path: "Teams/:id",
        element: <TeamsDetails />,
      },
      {
        path: "History",
        element: <HistoryPage />,
      },
      {
        path: "MyTeams",
        element: <MyTeamsPage />,
      },
      {
        path: "Organize",
        element: <OrganizePage />,
      },
    ],
  },
  {
    path: "/Selection",
    element: <AuthSelecction />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
