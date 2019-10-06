import React, { Component } from 'react';
import axios from "axios";
import toastr from 'toastr';

class ListCredentialPage extends Component {

    state = {
        credentials: []
    };

    async componentDidMount() {
        document.title = "List of credentials";

        let res = axios.post(
            "http://d24w27cd80vt93.cloudfront.net/api/digCred/search"
        );
        let { data } = await res;
        this.setState({ credentials: data });
    };

    onRevoke = (id) => e => {
        console.log(id);
        axios.delete("http://d24w27cd80vt93.cloudfront.net/api/digCred/revoke/c86becb2-b778-44e6-a338-9e4203603cc6")
            .then(res => {
                this.setState({
                    credentials: this.state.credentials.filter(item => {
                        return item.digitalcredid !== id;
                    })
                })
                toastr.success("Credential successfully revoked");
            })
            .catch(err => toastr.warning("Something wrong! Please try again later."))
    }

    render() {
        const credentialsTable = this.state.credentials.map((credential, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{credential.digitalcredid}</th>
                    <td>{credential.firstname}</td>
                    <td>{credential.lastname}</td>
                    <td>{credential.email}</td>
                    <td>{credential.programname}</td>
                    <td>{credential.postaladress}</td>
                    <td>{credential.nic}</td>
                    <td>
                        <button type="button" className="btn btn-primary" onClick={this.onRevoke(credential.digitalcredid)}>Revoke</button>
                    </td>
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
                                <div>All Credentials</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        List of credentials
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
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>{credentialsTable}</tbody>
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

export default ListCredentialPage;