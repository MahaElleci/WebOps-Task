import React from 'react';
import MainRouter from "./router/router"; 

import './App.css';

function App( {store} ) {
  return (
    <div className="grid-container">
       <MainRouter store={store}/>
    </div>
  );
}

export default App;
