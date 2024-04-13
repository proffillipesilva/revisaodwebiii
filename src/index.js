import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter
} from "react-router-dom";
import Main from './Main';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <HashRouter>
    {/*<RouterProvider router={router} /> */}
    <Main />
    </HashRouter>
  </React.StrictMode>
);

