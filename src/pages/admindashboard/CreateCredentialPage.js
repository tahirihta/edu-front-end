import React, { Component } from 'react';
import {
    Row, Col,
} from 'reactstrap';
import StudentSearchModal from '../../components/StudentSearchModal';
import { connect } from 'react-redux';
import Axios from 'axios';
import toastr from 'toastr';
import { setModal } from '../../actions/modalActions';


class CreateCredentialPage extends Component {

    state = {
        studentId: "",
        university: "",
        programName: "",
        attributionDate: "",
        email: "",
        type_digital_credential: "",
        modalIsOpen: false,
        disabled: true
    };

    componentDidMount() {
        document.title = "Add New Credential";
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.student.student.studentid) {
            this.setState({
                studentId: nextProps.student.student.studentid,
            });
        }

        if(nextProps.student.student.studentId) {
            this.setState({
                studentId: nextProps.student.student.studentId,
            });
        }
    }

    onSubmit = e => {
        e.preventDefault();

        if(this.state.studentId && this.state.university && this.state.attributionDate && this.state.programName && this.state.type_digital_credential) {
            Axios.post("http://d24w27cd80vt93.cloudfront.net/api/digCred/issue", {
                "studentId": this.state.studentId,
                "university": this.state.university,
                "programName": this.state.programName,
                "email": this.state.email,
                "attributionDate": this.state.attributionDate,
                "type_digital_credential": this.state.type_digital_credential
            })
            .then(res => {
                toastr.success("Credential successfully created!");
                this.setState({
                    studentId: "",
                    university: "",
                    programName: "",
                    attributionDate: "",
                    type_digital_credential: "",
                })
            })
            .catch(err => toastr.success("Someting wrong! Please check your inputs."));
        } else {
            toastr.warning("All fields are mandatory");
        }
    }

    openSearchModal = e => {
        // this.setState({modalIsOpen: true});
        this.props.setModal({
            createModal: false,
            searchModal: true,
        });
    };

    hideModal = () => {
        this.setState({ modalIsOpen: false });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            if(this.state.studentId && this.state.university && this.state.programName && this.state.attributionDate && this.state.type_digital_credential) {
                this.setState({disabled: false});
            } else {
                this.setState({disabled: true});
            }
        });
    };

    render() {
        return (
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="app-page-title">
                        <div className="page-title-wrapper">
                            <div className="page-title-heading">
                                <div className="page-title-icon">
                                    <i className="fas fa-atom icon-gradient bg-mean-fruit">
                                    </i>
                                </div>
                                <div>
                                    Add New Digital Credential
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-card mb-3 card">
                                <div className="card-body"><h5 className="card-title">Create Digital Credential</h5>
                                    <form className="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Student Id</label>
                                                    <input name="studentId" required defaultValue={this.state.studentId} readOnly placeholder="Student Id" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">University</label>
                                                    <input name="university" onChange={this.onChange} required defaultValue={this.state.university} placeholder="University" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Attribution date</label>
                                                    <input name="attributionDate" onChange={this.onChange} required defaultValue={this.state.attributionDate} placeholder="dd/mm/yyyy" type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Program Name</label>
                                                    <input name="programName" onChange={this.onChange} required defaultValue={this.state.programName} placeholder="Program Name" type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Type Digital Credential</label>
                                                    <select name="type_digital_credential" onChange={this.onChange} className="form-control">
                                                        <option defaultValue>Choose One</option>
                                                        <option value="Diploma">Diploma</option>
                                                        <option value="Certification">Certification</option>
                                                        <option value="Standard">Standard</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="position-relative form-group">
                                                    <label className="">Upload Credential</label>
                                                    <input type="file" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="mt-1 btn btn-primary" disabled={this.state.disabled} onClick={this.onSubmit}>Save</button>
                                    </form>
                                    <button type="submit" className="mt-1 btn btn-success" onClick={this.openSearchModal}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Row className="text-center">
                        <Col md="12">
                            <StudentSearchModal modalIsOpen={this.state.modalIsOpen}/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    student: state.student
});

export default connect(mapStateToProps, { setModal })(CreateCredentialPage);