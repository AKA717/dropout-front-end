import React from "react";

const StudentCard = () => {

    return (
        <div className="card rounded-3 mb-4">
            <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">Basic T-shirt</p>
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