import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdexLogo from "../assets/AdexIcon.jpg";



const LeftSidebar = () => {


  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img
          src={AdexLogo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">Adex360</span>
      </Link>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>
                  Dashboard
                 
                </p>
              </Link>
              
            </li>

            <li className="nav-item">
              <Link to="/latestresults" className="nav-link">
              <i class="fas fa-solid fa-chart-line"></i>
                <p>
                  Latest Results
                 
                </p>
              </Link>
              
            </li>

            <li className="nav-item">
              <Link to="#" className="nav-link">
              <i class="fas fa-sharp fa-solid fa-book-open"></i>
                <p>
                  Your Courses
                 
                </p>
              </Link>
              
            </li>



          </ul>
        </nav>
      </div>

    
    </aside>
  );
};

export default LeftSidebar;
