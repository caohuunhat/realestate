import React, { Component } from 'react';
import Banner from '../components/Banner';
import HotProperties from '../components/HotProperties';
import Properties from '../components/Properties'
import axios from 'axios'
import Pagination from '../components/Pagination';
import Search from '../components/Search';



class BuyCategoryPage extends Component {
    state = {
        datas: [],
        currentPage: 1,
    }

    componentDidMount() {
        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_sell.php?page=2&row_per_page=10', {
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

        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_sell.php?page=2&row_per_page=10', {
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


    showProduct = () => {
        const { datas } = this.state
        return datas.map(data => {
            return <Properties data={data} />
        })
    }

    render() {
        const { datas, currentPage } = this.state;
        // console.log(currentPage);
        const pageName = 'Nhà Đất Bán';
        return (
            <>
                {/* banner */}
                {/* <Banner pageName={pageName} /> */}
                {/* banner */}
                <div className="container">
                    <div className="properties-listing spacer">
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 ">
                                {/* Search */}
                                <Search />
                                {/* Search */}
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
                                            <option>Price: Low to High</option>
                                            <option>Price: High to Low</option>
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
            </>
        )
    }
}

export default BuyCategoryPage;
