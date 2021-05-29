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
        // console.log(image);
        return (
            <Link style={{ textDecoration: "none" }} to={`/productDetailPage/${id}`} className="col-lg-4 col-sm-6">
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
        )
    }
}

export default Properties;
