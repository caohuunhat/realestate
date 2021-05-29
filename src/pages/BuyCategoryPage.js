// import React, { Component } from 'react';
// import Banner from '../components/Banner';
// import HotProperties from '../components/HotProperties';
// import Properties from '../components/Properties'
// import axios from 'axios'
// import Pagination from '../components/Pagination';
// import Search from '../components/Search';



// class BuyCategoryPage extends Component {
//     state = {
//         datas: [],
//         totalPages: '',
//         currentPage: 1,
//     }

//     componentDidMount() {
//         console.log('Runnnnnnnnnn');
//         axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_sell.php', {
//             params: {
//                 page: this.state.currentPage,
//                 row_per_page: '3'
//             }
//         })
//             .then(res => {
//                 this.setState({
//                     datas: res.data.list,
//                     totalPages: res.data.total_page
//                 })
//             })
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log('Runnnnn update');
//         if (prevState.currentPage !== this.state.currentPage) {
//             axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_sell.php', {
//                 params: {
//                     page: this.state.currentPage,
//                     row_per_page: '3'
//                 }
//             })
//                 .then(res => {
//                     this.setState({
//                         datas: res.data.list,
//                         totalPages: res.data.total_page
//                     })
//                     console.log(this.state.datas);
//                 })
//         }
//     }

//     // incread = (state) => {
//     //     return {
//     //         ...state,
//     //         currentPage: state.currentPage + 1,
//     //     }
//     // }

//     onNext = () => {
//         this.setState({
//             currentPage: this.state.currentPage + 1
//         })
//     }

//     onPrev = () => {
//         this.setState({
//             currentPage: this.state.currentPage - 1
//         })
//     }

//     showProduct = () => {
//         const { datas } = this.state
//         if (!datas) return;
//         return datas.map(data => {
//             return <Properties data={data} />
//         })
//     }

//     render() {
//         const { datas, currentPage, totalPages } = this.state;
//         // console.log(currentPage);
//         // console.log(datas);
//         return (
//             <>

//             </>
//         )
//     }
// }

// export default BuyCategoryPage;


import HotProperties from '../components/HotProperties';
import Properties from '../components/Properties'
import axios from 'axios'
import Search from '../components/Search';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

BuyCategoryPage.propTypes = {

};

function BuyCategoryPage(props) {
    const [datas, setDatas] = useState([]);
    const [totalPages, setTotalPages] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse//api/data-index/list_sell.php', {
            params: {
                page: currentPage,
                row_per_page: '3'
            }
        })
            .then(res => {
                setDatas(res.data.list)
            })
    }, [currentPage])

    const showProduct = () => {
        if (!datas) return;
        return datas.map(data => {
            return <Properties data={data} />
        })
    }

    const onNext = () => {
        setCurrentPage(currentPage + 1);
    }

    const onPrev = () => {
        setCurrentPage(currentPage - 1);
    }


    console.log(datas);
    return (
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
                            {showProduct()}
                            {/* properties */}
                        </div>
                        <div className="center">

                            <ul className="pagination">
                                <li
                                    // className={prevStop}
                                    onClick={onPrev}
                                ><a href="#">«</a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li
                                    // className={nextStop}
                                    onClick={onNext}
                                ><a href="#">»</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyCategoryPage;