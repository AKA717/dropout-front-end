import React,{useEffect} from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { adminLoginAction } from "../../../redux/actions/admin-actions.js";

const AdminLoginComponent = ({admin,loginSubmit}) => {

    console.log("admin props : ",admin);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("Admin data : ",data);
        loginSubmit(data);
        reset();
    };

    useEffect(() => {
        if (admin.login) {
          // User is logged in, navigate to another route
          navigate('/admin/view', { replace: true });
        }
      }, [admin.login,navigate]);

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">ADMIN LOGIN</p>
                            </div>

                            <div className="email form-group mt-4">
                            <p className="text-danger">{admin.message}</p>
                                <input type="text" className="form-control" name="username" placeholder="Username"  {...register('username', { required: true })} />
                            </div>
                            <div className="password form-group mt-3">
                                <input type="password" className="form-control" name="password" placeholder="Password"  {...register('password', { required: true })} />
                            </div>

                            <div className="buttons text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div
                className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>
            </div>
        </section>
    );
}

const mapDispatchToProps = dispatch => {
    return{
        loginSubmit : (data) => dispatch(adminLoginAction(data))
    }
}

const mapStateToProps = ({admin}) => {
    return {admin}
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminLoginComponent);