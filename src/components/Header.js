import React, { Component } from 'react';
import {
    Link, Route
} from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to}>{label}</Link>
                </li>
            )
        }}
        />
    )
}

class Header extends Component {
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
                                    {/* <li className="active"><a href="index.php">Home</a></li>
                                    <li><a href="about.php">About</a></li>
                                    <li><a href="agents.php">Agents</a></li>
                                    <li><a href="blog.php">Blog</a></li>
                                    <li><a href="contact.php">Contact</a></li> */}

                                    <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
                                    <MenuLink label="About" to="/about" activeOnlyWhenExact={false} />
                                    <MenuLink label="Agent" to="/agent" activeOnlyWhenExact={false} />
                                    <MenuLink label="Blog" to="/blog" activeOnlyWhenExact={false} />
                                    <MenuLink label="Contact" to="/contact" activeOnlyWhenExact={false} />
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
                            <MenuLink label="Nhà Đất Bán" to="/buy"/>
                            <MenuLink label="Nhà Đất Thuê" to="/rent"/>
                        </ul>
                    </div>
                    {/* Header Starts</div> */}
                </div>
            </>
        );
    }
}

export default Header;