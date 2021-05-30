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
        datasInNewPage: [],
        totalPages: '',
        currentPage: 1,
    }

    componentDidMount() {
        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_sell.php?page=2&row_per_page=3', {
            params: {
                page: this.state.currentPage,
                row_per_page: '2'
            }
        }).then(res => {
            this.setState({
                datas: null,
                datasInNewPage: res.data.list,
                totalPages: res.data.total_page
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    static getDerivedStateFromProps(props, state) {
        if (state.datas !== state.datasInNewPage) {
            return {
                datasInNewPage: state.datasInNewPage,
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.datasInNewPage !== prevState.datas) {
            this.setState({
                datas: this.state.datasInNewPage,
                datasInNewPage: null
            })
        }
    }

    callData = async (currentPage) => {
        return await axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_sell.php', {
            params: {
                page: currentPage,
                row_per_page: '2'
            }
        })
    }

    onNext = async (currentPage) => {
        currentPage = currentPage + 1;
        let res = await this.callData(currentPage)
        this.setState({
            datasInNewPage: res.data.list,
            currentPage: currentPage
        })
    }

    onPrev = async (currentPage) => {
        currentPage = currentPage - 1;
        let res = await this.callData(currentPage)
        this.setState({
            datasInNewPage: res.data.list,
            currentPage: currentPage
        })

    }
    showProduct = () => {
        const { datas } = this.state
        if (!datas) return;
        return datas.map(data => {
            return <Properties data={data} />
        })
    }

    render() {
        const { datas, currentPage, totalPages } = this.state;
        return (
            <div className="container">
                <div className="properties-listing spacer">
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 ">
                            {/* Search */}
                            <Search />
                            {/* Search */}
                            <div className="hot-properties  ">
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

                                <ul className="pagination">
                                    <li
                                        // className={prevStop}
                                        onClick={() => this.onPrev(currentPage)}
                                    ><a href="#">«</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li
                                        // className={nextStop}
                                        onClick={() => this.onNext(currentPage)}
                                    ><a href="#">»</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyCategoryPage;