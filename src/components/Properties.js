import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Properties extends Component {
    state = {
        id: this.props.data.property_id,
        caption: this.props.data.caption,
        land_area: this.props.data.land_area,
        price: this.props.data.estimated_price,
        districtName: this.props.data.districtName,
        street: this.props.data.street,
        image: this.props.data.image,
        datas: this.props.data
    }

    render() {
        const { id, caption, land_area, price, districtName, street, image } = this.state;
        return (
            <div className="col-lg-4 col-sm-6">
                <div className="properties">
                    <div className="image-holder">
                        <img className="img-pro" src={`http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/${image}`} className="img-products" alt="properties" />
                        {/* <div className="status sold">Sold</div> */}
                    </div>
                    <h4 className="p-text">{caption}</h4>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="price">Diện tích: {land_area}m2</p>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="price" style={{ color: "red", fontWeight: "bold" }}>Giá: {price}</p>
                        </div>
                    </div>
                    <p className="address">{street} - {districtName}</p>
                    <Link className="btn btn-primary" to={`/productDetailPage/${id}`}>Xem chi tiết</Link>
                </div>
            </div>
        )
    }
}

export default Properties;
