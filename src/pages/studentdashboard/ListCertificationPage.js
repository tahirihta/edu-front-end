import React, { Component } from "react";
import Axios from "axios";
import toastr from "toastr";

class ListCertificationPage extends Component {
    state = {
        certifications: []
    };

    componentDidMount() {
        document.title = "List of certifications";

        Axios.get("http://d24w27cd80vt93.cloudfront.net/api/shared")
            .then(res => {
                this.setState({
                    certifications: res.data.filter(
                        x => x.type_digital_credential === "Certification" || x.type_digital_credential === "CERTIFICATION"
                    )
                });
            })
            .catch(err => toastr.warning("Something wrong!"));
    }
    render() {
        const certificationsTable = this.state.certifications.map((diploma, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{diploma.digitalcredid}</th>
                    <td>{diploma.firstname}</td>
                    <td>{diploma.lastname}</td>
                    <td>{diploma.email}</td>
                    <td>{diploma.programname}</td>
                    <td>{diploma.postaladress}</td>
                    <td>{diploma.nic}</td>
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
                                <div>All Certifications</div>
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
                                                <th>#Digital Id</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Program Name</th>
                                                <th>Postal Address</th>
                                                <th>NIC</th>
                                            </tr>
                                        </thead>
                                        <tbody>{certificationsTable}</tbody>
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

export default ListCertificationPage;
