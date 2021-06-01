import axios from 'axios';
import React, { Component } from 'react';
import HotProperties from '../components/HotProperties/HotProperties';
import Pagination from '../components/Pagination';
import Properties from '../components/Properties';
import Search from '../components/Search';

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
        window.scrollTo(0, 160);
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
                {/* <Banner pageName={pageName} /> */}
                {/* banner */}
                <div className="container">
                    <div className="properties-listing spacer">
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 ">
                                <Search />
                                <div className="hot-properties hidden-xs">
                                    <h4>Gợi ý</h4>
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