import React, { Component } from 'react';
import Axios from "axios";
import toastr from "toastr";
import { MDBDataTable } from 'mdbreact';

class ListStandardPage extends Component {
    state = {
        standards: []
    };

    componentDidMount() {
        document.title = "List of standards";

        Axios.get("http://d24w27cd80vt93.cloudfront.net/api/shared")
            .then(res => {
                this.setState({
                    standards: res.data.filter(
                        x => x.type_digital_credential === "Standard" || x.type_digital_credential === "STANDARD"
                    )
                });
            })
            .catch(err => toastr.warning("Something wrong!"));
    }
    render() {
        const data = {
            columns: [
                {
                    label: "Digital Id",
                    field: "digitalcredid",
                    sort: "asc",
                },
                {
                    label: "First Name",
                    field: "firstname",
                    sort: "asc",
                },
                {
                    label: "Last Name",
                    field: "lastname",
                    sort: "asc",
                },
                {
                    label: "Email",
                    field: "email",
                    sort: "asc",
                },
                {
                    label: "Program Name",
                    field: "programname",
                    sort: "asc",
                },
                {
                    label: "Postal Address",
                    field: "postaladress",
                    sort: "asc",
                },
                {
                    label: "NIC",
                    field: "nic",
                    sort: "asc",
                },
            ],
            rows: this.state.standards
        };
        // const standardsTable = this.state.standards.map((diploma, index) => {
        //     return (
        //         <tr key={index}>
        //             <th scope="row">{diploma.digitalcredid}</th>
        //             <td>{diploma.firstname}</td>
        //             <td>{diploma.lastname}</td>
        //             <td>{diploma.email}</td>
        //             <td>{diploma.programname}</td>
        //             <td>{diploma.postaladress}</td>
        //             <td>{diploma.nic}</td>
        //         </tr>
        //     );
        // });

        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                                </div>
                                <div>All Standards</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        List of standards
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
                                        <tbody>{standardsTable}</tbody>
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

export default ListStandardPage;