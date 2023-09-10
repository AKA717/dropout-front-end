import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { useNavigate } from "react-router-dom";
import DataCard from "../data-card/data-card";
import './admin-view.css';

const AdminViewComponent = ({admin}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!admin.login) {
          // User is logged in, navigate to another route
          navigate('/admin', { replace: true });
        }
      }, [admin.login,navigate]);

      const ageData = [
        ['Age1', 10],
        ['Age2', 30],
        ['Age3', 20],
        ['Age4', 40]
      ];

      const genderData = [
        ['Male', 60],
        ['Female', 30],
        ['Other', 10]
      ];

      const casteData = [
        ['caste1', 10],
        ['caste2', 16],
        ['caste3', 20],
        ['caste4', 30],
        ['caste5', 10],
        ['caste6', 14]
      ];
    
      const schoolData = [
        ['school1', 6],
        ['school2', 18],
        ['school3', 20],
        ['school4', 10],
        ['school5', 30],
        ['school5', 12],
        ['school5', 4]
      ];
    
      return (
        <div className="container">
        <div className="row view">
        <div className="col-md-6">
            <DataCard data={ageData} title="Age"/>
          </div>
          <div className="col-md-6">
            <DataCard data={genderData} title="Gender"/>
          </div>
          <div className="col-md-6">
            <DataCard data={casteData} title="Caste"/>
          </div>
          <div className="col-md-6">
            <DataCard data={schoolData} title="school wise"/>
          </div>
        </div>
      </div>
      
      );
}

const mapStateToProps = ({admin}) => {
     return {admin};
}

export default connect(mapStateToProps,null)(AdminViewComponent);