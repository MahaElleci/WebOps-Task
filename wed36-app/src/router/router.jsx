import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";  
import {Provider} from 'react-redux'; 

import MainLayout from "../components/Layouts/MainLayout";
import GalleryPage from "../components/GalleryPage/GalleryPage";  
import Categories from "../components/CategoriesPage/Categories"
import GalleryItemPage from "../components/GalleryItemPage/GalleryItemPage";

const MainRouter = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
          <Route path="/" render={()=><MainLayout><GalleryPage/></MainLayout>} exact/>  
          <Route path="/photo/:id" render={(props)=><MainLayout><GalleryItemPage {...props} /></MainLayout>} exact/> 
          <Route path="/categories" render={()=> <MainLayout><Categories/></MainLayout>}/>
      </Router>
    </Provider>
  );
};
export default MainRouter;
