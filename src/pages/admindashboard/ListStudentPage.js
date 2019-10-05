import React, { Component } from "react";
import axios from "axios";

class ListStudentPage extends Component {
    state = {
        students: []
    };

    async componentDidMount() {
        document.title = "List of students";

        // axios
        //     .get("http://d24w27cd80vt93.cloudfront.net/api/student/list")
        //     .then(res => this.setState({ students: res.data }))
        //     .catch(err => console.log(err));

        let res = axios.get(
            "http://d24w27cd80vt93.cloudfront.net/api/student/list"
        );
        let { data } = await res;
        this.setState({ students: data });
    }

    render() {
        const studentsTable = this.state.students.map((student, index) => {
            return (
                <tr>
                    <th scope="row">{student.studentid}</th>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.email}</td>
                    <td>{student.nationality}</td>
                    <td>{student.postaladdress}</td>
                    <td>{student.nic}</td>
                </tr>
            );
        });

        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
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
                                        List of certifications
                                    </h5>
                                    <table
                                        id="example"
                                        className="mb-0 table table-striped"
                                    >
                                        <thead>
                                            <tr>
                                                <th>#Id</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Nationality</th>
                                                <th>Postal Address</th>
                                                <th>NIC</th>
                                            </tr>
                                        </thead>
                                        <tbody>{studentsTable}</tbody>
                                    </table>
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
