import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HotBuyProperties extends Component {
    state = {
        // id: this.props.data.property_id,
        // caption: this.props.data.caption,
        // land_area: this.props.data.land_area,
        // price: this.props.data.estimated_price,
        // districtName: this.props.data.districtName,
        // street: this.props.data.street,
        // image: this.props.data.image,
        // datas: this.props.data,
        id: '',
        caption: '',
        land_area: '',
        price: '',
        districtName: '',
        street: '',
        image: '',
        datas: ''
    }

    render() {
        const { id, caption, land_area, price, districtName, street, image } = this.state;

        return (
            <div className="hot_buy_properties">
                <div className="row note-buy">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <h3>Bài đăng bán</h3>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <a href="#" className="pull-right viewall">Xem tất cả</a>
                    </div>
                </div>
                <div className="row">
                    <Link style={{ textDecoration: "none" }} to={`/productDetailPage`} className="col-lg-3 col-sm-6">
                        <div className="properties">
                            <div className="image-holder">
                                <img className="img-pro" src={`http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/${image}`} className="img-products" alt="properties" />
                                {/* <div className="status sold">Sold</div> */}
                            </div>
                            <div>
                                <h4 className="p-text">{caption}</h4>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pro-info">
                                    <p>Giá: {price}</p>
                                    <p>Diện tích: {land_area}m2</p>
                                </div>
                            </div>
                            <p className="address"><span className="glyphicon glyphicon-map-marker"></span> {street} - {districtName}</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={`/productDetailPage`} className="col-lg-3 col-sm-6">
                        <div className="properties">
                            <div className="image-holder">
                                <img className="img-pro" src={`http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/${image}`} className="img-products" alt="properties" />
                                {/* <div className="status sold">Sold</div> */}
                            </div>
                            <div>
                                <h4 className="p-text">{caption}</h4>
                            </div>
                            <div className="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pro-info">
                                    <p>Giá: {price}</p>
                                    <p>Diện tích: {land_area}m2</p>
                                </div>
                            </div>
                            <p className="address"><span className="glyphicon glyphicon-map-marker"></span> {street} - {districtName}</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={`/productDetailPage`} className="col-lg-3 col-sm-6">
                        <div className="properties">
                            <div className="image-holder">
                                <img className="img-pro" src={`http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/${image}`} className="img-products" alt="properties" />
                                {/* <div className="status sold">Sold</div> */}
                            </div>
                            <div>
                                <h4 className="p-text">{caption}</h4>
                            </div>
                            <div className="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pro-info">
                                    <p>Giá: {price}</p>
                                    <p>Diện tích: {land_area}m2</p>
                                </div>
                            </div>
                            <p className="address"><span className="glyphicon glyphicon-map-marker"></span> {street} - {districtName}</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={`/productDetailPage`} className="col-lg-3 col-sm-6">
                        <div className="properties">
                            <div className="image-holder">
                                <img className="img-pro" src={`http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/${image}`} className="img-products" alt="properties" />
                                {/* <div className="status sold">Sold</div> */}
                            </div>
                            <div>
                                <h4 className="p-text">{caption}</h4>
                            </div>
                            <div className="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pro-info">
                                    <p>Giá: {price}</p>
                                    <p>Diện tích: {land_area}m2</p>
                                </div>
                            </div>
                            <p className="address"><span className="glyphicon glyphicon-map-marker"></span> {street} - {districtName}</p>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HotBuyProperties;