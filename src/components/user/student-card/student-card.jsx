import React from "react";

const StudentCard = (props) => {

    console.log(props);

    return (
        <div className="card rounded-3 mb-4">
            <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{props.name.name}</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">GENDER</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">AGE</p>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;