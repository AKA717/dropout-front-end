import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import './user-view.css';

const UserViewComponent = ({user}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!user.login) {
          // User is logged in, navigate to another route
          navigate('/', { replace: true });
        }
      }, [user.login,navigate]);

    return(
        <div className="mt-5">
            <h2 className="text-center">USER VIEW</h2>
        </div>
    );
}

const mapStateToProps = ({user}) => {
    return {user}
}

export default connect(mapStateToProps,null)(UserViewComponent);