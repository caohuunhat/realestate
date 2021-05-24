import React, { Component } from 'react'
import Banner from '../components/Banner'
import HotProperties from '../components/HotProperties';
import Pagination from '../components/Pagination';
import Properties from '../components/Properties';
import axios from 'axios'

class RentCategoryPage extends Component {
    state = {
        datas: [],
        currentPage: 1,
    }

    showProduct = () => {
        const { datas } = this.state
        return datas.map(data => {
            return <Properties data={data} />
        })
    }

    componentDidMount() {
        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_rent.php?page=1&row_per_page=5', {
            params: {
                page: this.state.currentPage,
                row_per_page: '9'
            }
        })
            .then(res => {
                this.setState({
                    datas: res.data.list
                })
            })
    }

    onCurrentPage = (currentPage) => {
        this.setState({
            currentPage: currentPage
        })

        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_rent.php?page=1&row_per_page=5', {
            params: {
                page: this.state.currentPage,
                row_per_page: '9'
            }
        })
            .then(res => {
                this.setState({
                    datas: res.data.list
                })
            })
    }
    render() {
        const { datas, currentPage } = this.state;
        console.log(datas);
        const pageName = 'Nhà Đất Thuê';
        return (
            <div>
                {/* banner */}
                <Banner pageName={pageName} />
                {/* banner */}
                <div className="container">
                    <div className="properties-listing spacer">
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 ">
                                <div className="search-form"><h4><span className="glyphicon glyphicon-search" />Tìm theo</h4>
                                    <input type="text" className="form-control" placeholder="Tìm kiếm theo tên" />
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <select className="form-control">
                                                <option>Thuê</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-7">
                                            <select className="form-control">
                                                <option>Giá</option>
                                                <option>$150,000 - $200,000</option>
                                                <option>$200,000 - $250,000</option>
                                                <option>$250,000 - $300,000</option>
                                                <option>$300,000 - above</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <select className="form-control">
                                                <option>Loại</option>
                                                <option>Apartment</option>
                                                <option>Building</option>
                                                <option>Office Space</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary">Tìm kiếm</button>
                                </div>
                                <div className="hot-properties hidden-xs">
                                    <h4>Bài đăng nổi bật</h4>
                                    {/* Bài đăng nổi bật */}
                                    <HotProperties />
                                    {/* Bài đăng nổi bật */}
                                </div>
                            </div>
                            <div className="col-lg-9 col-sm-8">
                                <div className="sortby clearfix">
                                    {/* <div className="pull-left result">Showing: 12 of 100 </div> */}
                                    <div className="pull-right">
                                        <select className="form-control">
                                            <option>Lọc</option>
                                            <option>Giá: Thấp tới Cao</option>
                                            <option>Giá: Cao tới Thấp</option>
                                        </select></div>
                                </div>
                                <div className="row">
                                    {/* properties */}
                                    {this.showProduct()}
                                    {/* properties */}
                                </div>
                                <div className="center">
                                    <Pagination
                                        checkDatas={datas}
                                        onCurrentPage={this.onCurrentPage}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RentCategoryPage;