import React, { Component } from 'react';
import ListItem from './ListItem';
import callApiAu from '../../utils/callApiAu'
class ListForm extends Component {
    state = {
        datas: null,
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token')
        callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/manage_products/post.php?ptype_id=0', 'GET', token, null)
            .then(res => {
                this.setState({
                    datas: res.data.list
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    showListItem = () => {
        const { datas } = this.state;
        if (datas === null) return;
        return datas.map((data, index) => (
            <ListItem data={data} index={index} />
        ))
    }

    render() {
        const { datas } = this.state;
        console.log(this.state.datas);
        return (
            <div className="container list">
                <div className="btn-group top-btn">
                    <button className="btn btn-default choose-btn">Cần bán</button>
                    <button className="btn btn-default choose-btn">Cho thuê</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Loại</th>
                            <th>Địa chỉ</th>
                            <th>Giá</th>
                            <th>Diện tích</th>
                            <th>Thời gian</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showListItem()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListForm;