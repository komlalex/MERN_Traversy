import React from 'react'
import store from "./store.js";
import {Provider} from "react-redux";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

import HomeScreen from '../screens/HomeScreen.jsx'
import LoginScreen from '../screens/LoginScreen.jsx'
import RegisterScreen from '../screens/RegisterScreen.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route index={true} path='/'  element = {<HomeScreen/>} />
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path="/register" element={<RegisterScreen/>}/>
    </Route>
  ) 
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
  
  </Provider>
)
