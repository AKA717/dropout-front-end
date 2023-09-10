import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import StudentCard from "../student-card/student-card";
import './user-view.css';
import { useNavigate } from "react-router-dom";
import { studentDataAction } from "../../../redux/actions/actions";

const UserViewComponent = ({ user ,dataSubmit}) => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {

        data.userId = user.user.id;
        console.log(data);
        dataSubmit(data);
        reset();
    };

    useEffect(() => {
        if (!user.login) {
          // User is logged in, navigate to home page
          navigate('/', { replace: true });
        }
      }, [user.login, navigate]);

    return (
        <div className="container">
            <div className="section1">
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="title mb-4">ENTER STUDENT DETAILS</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 input-group">
                        <input type="text" className="form-control" name="firstname" placeholder="First Name" {...register('firstname', { required: true })}/>
                        <input type="text" className="form-control" name="lastnamename" placeholder="Last Name" {...register('lastname', { required: true })}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="age" placeholder="Age" {...register('age', { required: true })} />
                    </div>
                    <div className="mb-3">
                        <label className="gender-label">Gender</label>
                        <select className="select" name="gender" {...register('gender', { required: true })}>
                            <option value="">Please select one…</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="caste" placeholder="Caste" {...register('caste', { required: true })}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="area" placeholder="Area" {...register('area', { required: true })}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="district" placeholder="District" {...register('district', { required: true })}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="state" placeholder="State" {...register('state', { required: true })}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="pincode" placeholder="Pincode" {...register('pincode', { required: true })}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="reason" placeholder="Reason" {...register('reason', { required: true })}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
            <div className="section2">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="title mb-4">CURRENT STUDENT ENTRIES</p>
                </div>
                <StudentCard name={{name:'NAME 1'}}/>
                <StudentCard name={{name:'NAME 2'}}/>
                <StudentCard name={{name:'NAME 3'}}/>
                <StudentCard name={{name:'NAME 4'}}/>
                <StudentCard name={{name:'NAME 5'}}/>
                <StudentCard name={{name:'NAME 5'}}/>
                <StudentCard name={{name:'NAME 7'}}/>
                <StudentCard name={{name:'NAME 8'}}/>
            </div>
        </div>
    );
}

const mapStateToProps = ({ user }) => {
    return { user }
}

const mapDispatchToProps = dispatch => {

    return {dataSubmit : (data) => dispatch(studentDataAction(data)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserViewComponent);