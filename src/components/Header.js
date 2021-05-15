import React, { Component } from 'react';
import {
    Link, Route, withRouter
} from 'react-router-dom';
import callApiAu from '../utils/callApiAu'

const MenuLink = ({ label, to, activeOnlyWhenExact, onClick }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active} onClick={onClick}>
                    <Link to={to}>{label}</Link>
                </li>
            )
        }}
        />
    )
}

class Header extends Component {

    onLogOut = async () => {
        const approved = window.confirm("Bạn có muốn đăng xuất ?") == true;
        const token = sessionStorage.getItem("token")
        if (approved) {
            callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/logout.php', 'DELETE', token, null)
                .then(res => {
                    alert(res.data.success);
                    sessionStorage.removeItem('token')
                    this.props.history.push('/');
                })
        }
    }

    functionAuthor = () => {
        return sessionStorage.length > 0 ?
            <MenuLink label="Đăng xuất" activeOnlyWhenExact={false} onClick={this.onLogOut} /> : '';
    }
    render() {
        return (
            <>
                {/* Header Starts */}
                <div className="navbar-wrapper">

                    <div className="navbar-inverse" role="navigation">
                        <div className="container">
                            <div className="navbar-header">

                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>


                            {/* Nav Starts */}
                            <div className="navbar-collapse  collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
                                    <MenuLink label="About" to="/about" activeOnlyWhenExact={false} />
                                    <MenuLink label="Agent" to="/agent" activeOnlyWhenExact={false} />
                                    <MenuLink label="Contact" to="/contact" activeOnlyWhenExact={false} />
                                    {this.functionAuthor()}
                                </ul>
                            </div>
                            {/* Nav Ends */}

                        </div>
                    </div>
                </div>
                {/* Header Starts */}


                <div className="container">
                    {/* Header Starts */}
                    <div className="header">
                        <Link to="/"><img src="images/logo.png" alt="Realestate"></img></Link>

                        <ul className="pull-right">
                            <MenuLink label="Nhà Đất Bán" to="/buy" />
                            <MenuLink label="Nhà Đất Thuê" to="/rent" />
                        </ul>
                    </div>
                    {/* Header Starts</div> */}
                </div>
            </>
        );
    }
}

export default withRouter(Header);