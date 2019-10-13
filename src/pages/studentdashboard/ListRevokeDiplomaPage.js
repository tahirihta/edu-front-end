import React, { Component } from "react";
import Axios from "axios";
import toastr from "toastr";
import { MDBDataTable } from "mdbreact";
import { columns } from "../../columns";

class ListRevokeDiplomaPage extends Component {
    state = {
        diplomas: []
    };

    componentDidMount() {
        document.title = "List of Revoked diplomas";

        const student = JSON.parse(localStorage.studentInfo);

        Axios.get(
            "http://d24w27cd80vt93.cloudfront.net/api/shared/listRevoked/" +
                student.studentid
        )
            .then(res => {
                this.setState({
                    diplomas: res.data
                });
            })
            .catch(err => toastr.warning("Something wrong!"));
    }
    render() {
        this.state.diplomas.forEach((value, index) => {
            this.state.rows.push({
                digitalcredid: value.digitalcredid,
                firstname: value.firstname,
                lastname: value.lastname,
                email: value.email,
                programname: value.programname,
                postaladress: value.postaladress,
                nic: value.nic
            });
        });
        const data = {
            columns: columns,
            rows: this.state.rows
        };

        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="fas fa-atom icon-gradient bg-mean-fruit"></i>
                                </div>
                                <div>All Revoked Diplomas</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        List of Revoked diplomas
                                    </h5>
                                    <MDBDataTable
                                        striped
                                        bordered
                                        hover
                                        data={data}
                                    />
                                    {/* <table
                                        id="example"
                                        className="mb-0 table table-striped"
                                    >
                                        <thead>
                                            <tr>
                                                <th>#Digital Id</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Program Name</th>
                                                <th>Postal Address</th>
                                                <th>NIC</th>
                                            </tr>
                                        </thead>
                                        <tbody>{diplomasTable}</tbody>
                                    </table> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListRevokeDiplomaPage;
