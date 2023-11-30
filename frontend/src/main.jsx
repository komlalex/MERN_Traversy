import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import LoginScreen from '../screens/LoginScreen.jsx'

import HomeScreen from '../screens/HomeScreen.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route index={true} path='/'  element = {<HomeScreen/>} />
      <Route path='/login' element={<LoginScreen/>}/>
    </Route>
  ) 
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
