import React, { Component } from 'react';
import callAPI from '../utils/callAPI'
import { Redirect } from 'react-router-dom';
import Banner from './Banner';

class Register extends Component {
    state = {
        txtFullName: '',
        selSex: '',
        txtTel: '',
        txtEmail: '',
        txtPassword: '',
        txtConfirmPass: '',
        redirect: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { txtFullName, selSex, txtTel, txtEmail, txtPassword, txtConfirmPass } = this.state;
        callAPI("http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/register.php", "POST", {
            tenant_id: null,
            full_name: txtFullName,
            email: txtEmail,
            password: txtPassword,
            confirm_password: txtConfirmPass,
            phone_no: txtTel,
            sex: selSex
        })
            .then(res => {
                return res.data
            })
            .then(res => {
                if (res.errors) {
                    alert(res.errors)
                } else {
                    alert(res.success)
                    this.setState({
                        redirect: true
                    })
                }
            })
    }

    render() {
        console.log(this.state);
        const {
            txtFullName,
            selSex,
            txtTel,
            txtEmail,
            txtPassword,
            txtConfirmPass,
            redirect
        } = this.state;

        if (redirect) {
            return <Redirect to='/login' />;
        }

        const pageName = "Đăng ký"
        return (
            <>
                {/* Banner */}
                <Banner pageName={pageName}/>
                {/*banner */}
                <div className="container" style={{ padding: "30px 0px" }}>
                    <div class="row">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
                            <p>và bắt đầu đăng tin ngay</p>
                            <form onSubmit={this.onSubmit}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Họ tên đầy đủ"
                                    name="txtFullName"
                                    value={txtFullName}
                                    onChange={this.onChange}
                                    maxLength={50}
                                    required
                                />
                                <input type="tel"
                                    className="form-control"
                                    placeholder="Nhập vào số điện thoại"
                                    name="txtTel"
                                    value={txtTel}
                                    onChange={this.onChange}
                                    pattern="[0-9]{10}"
                                    required
                                />
                                <select
                                    className="form-control"
                                    name="selSex"
                                    value={selSex}
                                    onChange={this.onChange}
                                >
                                    <option>Chọn giới tính</option>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                                <input type="email" className="form-control" placeholder="Nhập vào Email"
                                    name="txtEmail"
                                    value={txtEmail}
                                    onChange={this.onChange}
                                    required
                                />
                                <input type="password" className="form-control" placeholder="Nhập vào mật khẩu (ít nhất 8 ký tự)"
                                    name="txtPassword"
                                    value={txtPassword}
                                    onChange={this.onChange}
                                    required minlength="8"
                                />
                                <input type="password" className="form-control" placeholder="Xác nhận mật khẩu"
                                    name="txtConfirmPass"
                                    value={txtConfirmPass}
                                    onChange={this.onChange}
                                    required minlength="8"
                                />
                                <br />
                                <button type="submit" className="btn btn-success" name="Submit">Đăng Ký</button>
                            </form>
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
            </>
        );
    }
}

export default Register;