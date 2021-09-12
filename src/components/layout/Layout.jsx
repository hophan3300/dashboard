import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'
import './Layout.css'
import { useSelector} from 'react-redux';

const Layout = () => {

   const themeReducer = useSelector(state => state.ThemeReducer)
  
   return (
     <Router>
        <Route render={(props) => (
           <div className={`layout ${themeReducer.mode !== undefined ? themeReducer.mode : ""} ${themeReducer.color !== undefined ? themeReducer.color : ""}`}>
              <Sidebar {...props}/>
              <div className="layout__content">
                 <TopNav/>
                  <div className="layout__content__main">
                     <Routes/>
                  </div>
              </div>
           </div>
        )}/>
     </Router>
   )
}

export default Layout
