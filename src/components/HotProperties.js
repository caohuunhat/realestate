import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HotProperties extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-sm-5"><img src="images/properties/1.jpg" className="img-responsive img-circle" alt="properties" /></div>
                <div className="col-lg-8 col-sm-7">
                    <h5 className="hotp-text"><Link to="/productDetailPage">Bán đất 192,7m2 kiệt oto Trường Chinh, An Đông, Hà Nội</Link></h5>
                    <p className="price">Giá: 2 Tỷ</p> </div>
            </div>
        )
    }
}

export default HotProperties;
