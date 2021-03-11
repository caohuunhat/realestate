import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
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
                                    <li className="active"><a href="index.php">Home</a></li>
                                    <li><a href="about.php">About</a></li>
                                    <li><a href="agents.php">Agents</a></li>
                                    <li><a href="blog.php">Blog</a></li>
                                    <li><a href="contact.php">Contact</a></li>
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
                        <a href="index.php"><img src="images/logo.png" alt="Realestate"></img></a>

                        <ul className="pull-right">
                            <li><a href="buysalerent.php">Buy</a></li>
                            <li><a href="buysalerent.php">Sale</a></li>
                            <li><a href="buysalerent.php">Rent</a></li>
                        </ul>

                    </div>
                    {/* Header Starts</div> */}
                </div>
            </div>
        );
    }
}

export default Header;