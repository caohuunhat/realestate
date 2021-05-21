import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class ListItem extends Component {
    state = {
        index: this.props.index,
        id: this.props.data.property_id,
        price: this.props.data.estimated_price,
        type: this.props.data.ptype_name,
        area: this.props.data.land_area,
        time: this.props.data.post_time,
    }

    onChange = (e) => {
        const { id } = this.state;
        const value = e.target.value;
        if (value === 'detail') {
            this.props.history.push(`/productDetailPage/${id}`)
        }
    }

    render() {
        const { index, id, price, type, area, time } = this.state;
        console.log(this.props.data);
        return (
            <tr>
                <td className="text-center">{index+1}</td>
                <td>{type}</td>
                <td>john@example.com</td>
                <td>{price}</td>
                <td className="text-center">{area} m²</td>
                <td>{time}</td>
                <td>
                    <button type="button" className="btn btn-default paid-button">Đang chờ duyệt</button>
                </td>
                <td>
                    <select
                        className="form-control"
                        onChange={this.onChange}
                    >
                        <option>-- Chọn hành động --</option>
                        <option value='detail'>Xem chi tiết</option>
                        <option>Gia hạn</option>
                        <option>Xóa</option>
                        <option>Thanh toán</option>
                    </select>
                </td>
            </tr>
        )
    }
}
export default withRouter(ListItem);