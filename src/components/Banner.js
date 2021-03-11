import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="inside-banner">
                <div className="container">
                    <span className="pull-right"><a href="#">Home</a> / Register</span>
                    <h2>Register</h2>
                </div>
            </div>
        );
    }
}

export default Banner;