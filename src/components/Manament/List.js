import React, { Component } from 'react';

class List extends Component {
    state = {
        datas: []
    }


    render() {
        return (
            <div className="container list">
                <div className="btn-group top-btn">
                    <button className="btn btn-default choose-btn">Bán</button>
                    <button className="btn btn-default choose-btn">Cho thuê</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Địa chỉ</th>
                            <th>Giá</th>
                            <th>Diện tích</th>
                            <th>Thời gian</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                            <td>
                                <button type="button" className="btn btn-default paid-button">Đang chờ duyệt</button>
                            </td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default detail-button">Chi tiết</button>
                                    <button type="button" className="btn btn-default delete-button">Xóa</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;