import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Properties extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6">
                <div className="properties">
                    <div className="image-holder"><img src="images/properties/3.jpg" className="img-responsive" alt="properties" />
                        {/* <div className="status sold">Sold</div> */}
                    </div>
                    <h4 className="p-text">Bán đất 192,7m2 kiệt oto Trường Chinh, An Đông, Hà Nội</h4>
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="price">Diện tích: 200m2</p>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="price" style={{color: "red", fontWeight: "bold"}}>Giá: 2 Tỷ</p>
                        </div>
                    </div>
                    <p className="price">Nguyễn Chí Thanh - Hà Nội</p>
                    <Link className="btn btn-primary" to="/productDetailPage">Xem chi tiết</Link>
                </div>
            </div>
        )
    }
}

export default Properties;
