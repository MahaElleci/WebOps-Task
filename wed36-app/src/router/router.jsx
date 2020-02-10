import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import MainLayout from "../components/MainLayout";
import Home from "../components/Home"; 
import Categories from "../components/Categories"

const MainRouter = () => {
  return (
    <React.Fragment>
      <Router>
          <Route path="/" render={()=> <MainLayout subComponent={<Home/>}/>} exact/> 
          <Route path="/categories" render={()=> <MainLayout subComponent={<Categories/>}/>} exact/> 
          <Route path="/categories/:id" render={(props)=> <MainLayout subComponent={<Home {...props} />}/>}/>
      </Router>
    </React.Fragment>
  );
};
export default MainRouter;
