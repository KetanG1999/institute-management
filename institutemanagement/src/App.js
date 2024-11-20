import React from 'react';
import Home from './component/StudentModule/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddStudent from './component/StudentModule/AddStudent';
import View from './component/StudentModule/View';
import {UpdateStudent} from './component/StudentModule/UpdateStudent';
// import { UpdateStudent } from './component/StudentModule/UpdateStudent';
import {AddUser} from '../src/component/Users/AddUser';
import {UpdateUser} from './component/Users/UpdateUser';
import { UserDashboord } from './component/Users/UserDashboord';
import { AddBatch } from './component/Batch/AddBatch';
import { BatchDashboord } from './component/Batch/BatchDashboord';
import Signup from './component/Log in/SignUp';
import Login from './component/Log in/LogIn';

// const store = configerStore({
//   reducer: {
//       users: Reducer
//   }
// })
const router = createBrowserRouter([
  {
    path:'/',
    element:<Signup/>
  },
  {
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/BatchDashboord',
    element:<BatchDashboord/>
  },
  {
    path:"/AddBatch",
    element:<AddBatch/>

  },
  {
    path:"/UserDashboord",
    element:<UserDashboord/>,
  },
  {
    path:'/AddUser',
    element:<AddUser/>
  } ,
  {
    path:"/UpdateUser/:id",
    element:<UpdateUser/>
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/add-student",
    element: <AddStudent />,
  },
  {
    path: "/view-page/:id",
    element: <View />,
  },
  {
    path: "/update-student/:id",
    element: <UpdateStudent />,
  },
]);

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>
}
export default App;
