import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Layouts/Root.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import ShowBooks from './Components/Pages/ShowBooks.jsx';
import AddBook from './Components/Pages/AddBook.jsx';
import { Provider } from 'react-redux';
import store from './App/Store.js';
import EditPage from './Components/Pages/Editpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true, Component:Home
      },
      {
        path:"show-books", Component:ShowBooks
      },
      {
        path:"add-book", Component:AddBook
      },
      {
        path:"edit-page", Component:EditPage
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
   <RouterProvider router={router} />
  </Provider>,
)
