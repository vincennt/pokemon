import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import Nav from "./components/nav";
import "/Users/vins/Documents/konexio/react/poke-context/src/style.css"
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import { useState, useEffect } from 'react'

import { BrowserRouter, Switch , Route } from "react-router-dom";


const App = () => {

  return(
    <>
      <BrowserRouter>
      <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='*' component={Error404}/>
        </Switch>
      </BrowserRouter>
    </>  
  )
}

export default App;
