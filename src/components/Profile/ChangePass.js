import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class ChangePass extends Component {

    onGoBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="changePass">
                <form className="form-width" onSubmit={this.submitUpdateForm}>
                    <legend className="text-center">Đổi mật khẩu</legend>
                    <div className="form-group">
                        <label htmlFor>Mật khẩu cũ</label>
                        <input
                            type="text"
                            name="full_name"
                            onChange={this.onChange}
                            className="form-control"
                            placeholder="Mật khẩu cũ"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Mật khẩu mới</label>
                        <input
                            type="text"
                            name="phone"
                            onChange={this.onChange}

                            className="form-control"
                            placeholder="Mật khẩu mới"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Xác nhận mật khẩu mới</label>
                        <input
                            type="text"
                            name="phone"
                            onChange={this.onChange}

                            className="form-control"
                            placeholder="Xác nhận mật khẩu mới"
                        />
                    </div>
                    <div className="btn-group row">
                        <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <button
                                className="btn btn-primary"
                                onClick={()=>{this.props.history.push('/ProfilePage')}}
                            >trở về</button>
                        </div>
                        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >Đổi mật khẩu</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(ChangePass);