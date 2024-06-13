import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Lib/Layout"
import HomePage from "./Pages/Homepage.jsx/HomePage"


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Layout />, children: [{ path: "/", element: <HomePage /> }] },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
