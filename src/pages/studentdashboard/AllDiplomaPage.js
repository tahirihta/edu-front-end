import React, { Component } from "react";
import Axios from "axios";
import toastr from "toastr";
import { MDBDataTable } from "mdbreact";
import { columns } from "../../columns";

class AllDiplomaPage extends Component {
    state = {
        diplomas: [],
        rows: [],
        student: {}
    };

    componentDidMount() {
        document.title = "List of diploma";

        if (localStorage.studentInfo !== undefined) {
            const student = JSON.parse(localStorage.studentInfo);
            this.setState({ student: student });
        }

        Axios.post("http://d24w27cd80vt93.cloudfront.net/api/digCred/search")
            .then(res => {
                this.setState(
                    {
                        diplomas: res.data.filter(
                            x =>
                                (x.type_digital_credential === "DIPLOMA" ||
                                    x.type_digital_credential === "Diploma") &&
                                x.studentid === this.state.student.studentid
                        )
                    },
                    () => {
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
                    }
                );
            })
            .catch(err => toastr.warning("Something wrong!"));
    }
    render() {
        const data = {
            columns: columns,
            rows: this.state.rows
        };
        // const diplomasTable = this.state.diplomas.map((diploma, index) => {
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
                                    <i className="fas fa-atom icon-gradient bg-mean-fruit"></i>
                                </div>
                                <div>All Diploma</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        List of diplomas
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

export default AllDiplomaPage;
