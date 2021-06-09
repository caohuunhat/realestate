import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Confirm, Alert } from 'react-st-modal';

class ForgotPass extends Component {
    state = {
        email: '',
    }
    onChange = (e) => {
        const value = e.target.value;
        this.setState({
            email: value
        })
    }

    onSubmitEmail = async (e) => {
        e.preventDefault();
        const { email } = this.state;
        const res = await axios.put('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/forgot_password/input_email.php', {
            email: email,
        })

        if (res) {
            if (res.data.success) {
                Alert(res.data.success, "Thông báo !")
            } else {
                Alert(res.data.errors, "Thông báo !")
            }
        }
    }
    render() {
        console.log(this.state.email);
        return (
            <>
                <div className="container" style={{ padding: "30px 0px" }}>
                    <div class="row">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h2>Quên mật khẩu</h2>
                            <form onSubmit={this.onSubmitEmail}>
                                <div className="form-group">
                                    <label className="sr-only">Nhập vào Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Nhập vào email"
                                        name="email"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-login"
                                >Gửi mã</button>
                            </form>
                            <br />
                            <h4>Hoặc tạo tài khoản mới</h4>
                            <p>Bắt đầu đăng tin ngay trên nền tảng của chúng tôi</p>
                            <Link to="/register" className="btn btn-default">
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                </div>
            </>
        );
    }
}

export default ForgotPass;