import React from "react";
import {connect} from 'react-redux';
import {Link,useLocation} from 'react-router-dom';
import './navbar.css';
import { adminLogoutAction } from "../../../redux/actions/admin-actions.js";

const AdminNavbar = ({admin,adminLogOut}) => {

  const location = useLocation();

  console.log("current path : ",location.pathname);

  console.log("admin component : ",admin);
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
          <div className="container-fluid">
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <h3 className="mt-2">EduDrop ADMIN PANEL</h3>
            </div>

            {
              admin.login? 

                <button className="btn btn-danger" onClick={() => adminLogOut()}>Logout</button>

                :

                <></>
            }
          </div>
        </nav>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    adminLogOut : () => dispatch(adminLogoutAction())
  }
}

const mapStateToProps = ({admin}) =>
{
  console.log("navvar",admin);
  return {admin};
} 

export default connect(mapStateToProps,mapDispatchToProps)(AdminNavbar);