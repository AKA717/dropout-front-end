import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { useNavigate } from "react-router-dom";
import './admin-view.css';

const AdminViewComponent = ({admin}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!admin.login) {
          // User is logged in, navigate to another route
          navigate('/admin', { replace: true });
        }
      }, [admin.login,navigate]);

    return(
        <div>
            <h1 className="text-center" >Admin View</h1>
        </div>
    );
}

const mapStateToProps = ({admin}) => {
     return {admin};
}

export default connect(mapStateToProps,null)(AdminViewComponent);