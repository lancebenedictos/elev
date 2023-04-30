import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Pages

// Pages end

// Router
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Footer } from "./features/home";
import ItemInfo from "./pages/ItemInfo";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ScrollReset from "./features/home/components/ScrollReset";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="relative h-screen overflow-y-scroll  w-full flex flex-col main-container">
        <Navbar />
        <Outlet />
        <ScrollReset />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
      },
      { path: "about", element: <About /> },
      {
        path: "shop/:id",
        element: <ItemInfo />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

// Route end

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
