import React, { Component } from 'react';
import callAPI from '../../utils/callAPI';
import axios from "axios"
import { getProfile } from '../../constans/getAPI';
import callApiAu from '../../utils/callApiAu'

class Profile extends Component {
    state = {
        full_name: '',
        email: '',
        phone: '',
        sex: ''
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token');
        callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/profile.php', 'GET', token, null)
            .then(res => {
                this.setState({
                    full_name: res.data.full_name,
                    email: res.data.email,
                    phone: res.data.phone_no,
                    sex: res.data.sex
                })
            })
    }

    render() {
        const { full_name, email, phone, sex } = this.state;
        return (
            <div className="profile" >
                <div class="row text-center">
                    <div class="col-sm-12">
                        <img src="/images/anh_user.png" width="50%" alt="anh user" />
                    </div>
                </div>
                <form className="mt-40">
                    <div className="form-group bd-b">
                        <div className="row">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-3">
                                <label>NAME</label>
                            </div>
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-6 text-left">
                                <h5>
                                    {full_name}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="form-group bd-b">
                        <div className="row">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-3">
                                <label>EMAIL</label>
                            </div>
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-6 text-left">
                                <h5>
                                    {email}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="form-group bd-b">
                        <div className="row">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-3">
                                <label>PHONE</label>
                            </div>
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-6 text-left">
                                <h5>
                                    {phone}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="form-group bd-b">
                        <div className="row">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-3">
                                <label>GENDER</label>
                            </div>
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-6 text-left">
                                <h5>
                                    {sex}
                                </h5>
                            </div>
                        </div>
                    </div>
                </form>
                <br />
                <div className="row">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-4">
                        <button type="submit" className="btn-profile">Sửa thông tin</button>
                    </div>
                    <div className="col-sm-4 ">
                        <button type="submit" className="btn-profile">Đổi mật khẩu</button>
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;