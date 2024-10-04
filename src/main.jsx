import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "../components/Posts.jsx";
import EditPost from "../components/EditPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/posts",
    loader: () => fetch("http://localhost:5000/posts"),
    element: <Posts></Posts>,
  },
  {
    path: "/posts/:id",
    loader: ({ params }) => fetch(`http://localhost:5000/posts/${params.id}`),
    element: <EditPost></EditPost>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
