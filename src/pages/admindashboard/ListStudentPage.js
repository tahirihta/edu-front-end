import React, { Component } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";
import { studentColumns } from "../../columns";

class ListStudentPage extends Component {
    state = {
        students: [],
        rows: []
    };

    async componentDidMount() {
        document.title = "List of students";

        let res = axios.get(
            "http://d24w27cd80vt93.cloudfront.net/api/student/list"
        );
        let { data } = await res;
        this.setState({ students: data });
    }

    render() {
        this.state.students.forEach((value, index) => {
            this.state.rows.push({
                digitalcredid: value.studentid,
                firstname: value.firstname,
                lastname: value.lastname,
                email: value.email,
                nationality: value.nationality,
                postaladress: value.postaladress,
                nic: value.nic
            });
        });

        const data = {
            columns: studentColumns,
            rows: this.state.rows
        };

        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="fas fa-graduation-cap icon-gradient bg-mean-fruit"></i>
                                </div>
                                <div>All Students</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        List of students
                                    </h5>
                                    <MDBDataTable
                                        striped
                                        bordered
                                        hover
                                        data={data}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListStudentPage;
