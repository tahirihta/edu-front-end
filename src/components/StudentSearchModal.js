import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { setStudent } from '../actions/studentActions';
import { connect } from 'react-redux';
import CreateStudentModal from './CreateStudentModal';


class StudentSearchModal extends React.Component {
    state = {
        modal: false,
        sfirstname: "",
        slastname: "",
        sbirthdate: "",
        createModal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSearch = (e) => {
        e.preventDefault();

        const data = {
            "firstname": this.state.sfirstname,
            "lastname": this.state.slastname,
            "birthdate": this.state.sbirthdate
        };

        toastr.clear();

        if(this.state.sfirstname !== '' || this.state.slastname !== '' || this.state.sbirthdate !== '') {
            axios.post("http://d24w27cd80vt93.cloudfront.net/api/student/search", data)
                .then(res => {
                    if(res.data.length > 0) {
                        this.props.setStudent(res.data[0]);
                        toastr.success("Student Found");
                        this.setState({ modal: false });
                    } else {
                        toastr.warning("Student Not Found. Create now..");
                        this.setState({ modal: false, createModal: true });
                    }
                })
                .catch(err => console.log(err));
        } else {
            toastr.warning("Enter at least one value");
        }
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            modal: nextProps.modalIsOpen
        });
    }

    render() {
        // console.log(this.props.modalIsOpen);
        return (
            <span className="d-inline-block mb-2 mr-2">
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Search student</ModalHeader>
                    <ModalBody>
                        <form className="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">
                                            First Name
                                        </label>
                                        <input
                                            name="sfirstname"
                                            placeholder="First Name"
                                            type="text"
                                            className="form-control"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">
                                            Last Name
                                        </label>
                                        <input
                                            name="slastname"
                                            placeholder="Last Name"
                                            type="text"
                                            className="form-control"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label className="">
                                            Bith date
                                        </label>
                                        <input
                                            name="sbirthdate"
                                            placeholder="dd/mm/yyyy"
                                            type="date"
                                            className="form-control"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" onClick={this.toggle}>Cancel</Button>
                        <Button color="primary" onClick={this.onSearch}>Search</Button>{' '}
                    </ModalFooter>
                </Modal>
                <CreateStudentModal createModal={this.state.createModal}/>
            </span>
        );
    }
}

const mapStateToProps = state => ({
    student: state.student
});

export default connect(mapStateToProps, { setStudent })(StudentSearchModal);