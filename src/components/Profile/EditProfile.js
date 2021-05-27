import React, { Component } from 'react';
// import callApiAu from './../../utils/callApiAu'
import axios from 'axios'

class EditProfile extends Component {
    state = {
        full_name: '',
        phone: '',
        sex: '',
    }

    componentDidMount() {
        this.setState({
            full_name: this.props.datas.full_name,
            phone: this.props.datas.phone,
            sex: this.props.datas.sex,
        })
    }

    onChange = (e) => {

    }

    submitUpdateForm = (e) => {
        const { full_name, phone, sex } = this.state;
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        const url = 'http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/update.php';
        const formData = new FormData();
        formData.append('full_name', full_name)
        formData.append('phone_no', phone)
        formData.append('sex_id', sex)
        axios({
            url: url,
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                token: token,
            },
            data: formData
        })
            .then(res => {
                console.log(res);
            })
    }

    render() {
        const { full_name, phone, sex } = this.state;
        console.log(this.state);
        return (
            <div className="edit-profile">
                <form className="form-edit" onSubmit={this.submitUpdateForm}>
                    <legend className="text-center legen-form-edit">Cập nhập thông tin</legend>
                    <div className="form-group">
                        <label htmlFor>Họ tên</label>
                        <input
                            type="text"
                            value={full_name}
                            name="full_name"
                            onChange={this.onChange}
                            className="form-control"
                            placeholder="Nhập vào họ tên"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Phone</label>
                        <input
                            type="text"
                            value={phone}
                            name="phone"
                            onChange={this.onChange}

                            className="form-control"
                            placeholder="Nhập vào số điện thoại"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Gender</label>
                        <select
                            name="sex"
                            onChange={this.onChange}
                            className="form-control"
                        >
                            <option value={1}>Nam</option>
                            <option value={2}>Nữ</option>
                        </select>
                    </div>
                    <div className="form-group button-changePass">
                        <button
                            className="btn btn-edit-form"
                            onClick={this.props.onCloseForm}
                        >Đóng</button>
                        <button
                            type="submit"
                            className="btn btn-edit-form"
                        >Cập nhập</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditProfile;