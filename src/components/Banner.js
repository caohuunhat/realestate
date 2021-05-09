import axios from 'axios';
import React, { Component } from 'react';
import {
    Link, withRouter
} from "react-router-dom";
import callAPI from '../utils/callAPI'

class Banner extends Component {
    state = {
        Authorise: false,
    }

    onLogOut =  () => {
        callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/logout.php', 'DELETE', {
            headers: {
                'Content-Type': 'application/json',
                token: sessionStorage.token
            }
        })
            .then((res) => {
                sessionStorage.removeItem('token')
            })
    }


    functionAuthor = () => {
        return sessionStorage.length > 0 ? <>
            <button
                className="btn btn-info"
                onClick={this.onLogOut}
            >Đăng xuất</button>
        &ensp; &nbsp;
            <Link to="/addproduct"><button
                className="btn btn-info"
            >Đăng tin</button></Link> </> :
            <>
                <p>Tham gia ngay để xem các dự án bất động sản tốt nhất</p>
                <Link to="/login" className="btn btn-info">Đăng nhập</Link>
            &ensp; &nbsp;
                <Link to="/register" className="btn btn-info">Đăng ký</Link>
            </>
    }

    render() {
        return (
            <div className="banner-search">
                <div className="container">
                    <div className="searchbar">
                        <div className="row">
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <h2 style={{ color: "white" }}>{this.props.pageName}</h2>
                                {/* <p>Hơn 55 bài đăng trong mục này</p> */}
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                {this.functionAuthor()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Banner);