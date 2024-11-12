import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { ErrorPage } from "./pages/404";
import { ProductPage } from "./pages/products";
import { ProfilePage } from "./pages/profile";
import { DetailProductPage } from "./pages/detailProductPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Layouts/Navbar";
import { DarkModeContextProvider } from "./context/DarkMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div>Hello World</div>
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: (
      <>
        <Navbar />
        <ProductPage />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Navbar />
        <ProfilePage />
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Navbar />
        <DetailProductPage />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);
