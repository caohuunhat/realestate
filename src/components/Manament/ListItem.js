import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PopupCom from '../AddProduct/PopupCom'
import axios from 'axios'
class ListItem extends Component {
    state = {
        index: this.props.index,
        id: this.props.data.property_id,
        price: this.props.data.estimated_price,
        type: this.props.data.ptype_name,
        area: this.props.data.land_area,
        time: this.props.data.post_time,
        post_status: this.props.data.post_status,
        apartment_number: this.props.data.apartment_number,
        street: this.props.data.street,
        status: this.props.data.status,
        modalDatas: this.props.data,
    }

    handleClickStatus = () => {
        const { post_status, modalDatas } = this.state;
        if (post_status === 'Chưa thanh toán') {
            return <PopupCom name={post_status} modalDatas={modalDatas} />
        }
    }

    handleDeleteId = (id) => {
        this.props.handleDeleteFormId(id)
    }

    render() {
        const { index, price, type, area, time, apartment_number, street, id, status } = this.state;
        console.log(this.props.data);
        return (
            <>
                <tr>
                    <td className="text-center">{index + 1}</td>
                    <td>{type}</td>
                    <td>{`${apartment_number} ${street}`}</td>
                    <td>{price}</td>
                    <td className="text-center">{area} m²</td>
                    <td>{time}</td>
                    <td>
                        {this.handleClickStatus()}
                    </td>
                    <td>
                        <div className="btn-group" role="group">
                            <Link to={`/ProductDetailPage/${id}`} className="btn btn-default paid-button">Xem chi tiết</Link>
                            <button
                                className="btn btn-default paid-button"
                                onClick={() => this.handleDeleteId(id)}
                            >Xóa</button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
export default ListItem;