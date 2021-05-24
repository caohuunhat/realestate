import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div className="search-form"><h4><span className="glyphicon glyphicon-search" />Tìm kiếm</h4>
                <input type="text" className="form-control" placeholder="Tìm kiếm theo tên" />
                <div className="row">
                    <div className="col-lg-6">
                        <select className="form-control">
                            <option>Giá</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <select className="form-control">
                            <option>Diện tích</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <select className="form-control">
                            <option>Tỉnh / Thành phố</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <select className="form-control">
                            <option>Quận / Huyện</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <select className="form-control">
                            <option>Phường / Thị Xã</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary">Tìm kiếm</button>
            </div>
        )
    }
}

export default Search;