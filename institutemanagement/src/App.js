import React from 'react'
import Home from './component/StudentModule/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddStudent from './component/StudentModule/AddStudent';

// const store = configerStore({
//   reducer: {
//       users: Reducer
//   }
// })
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-student",
    element: <AddStudent />
  }
]);

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>
}
export default App;
