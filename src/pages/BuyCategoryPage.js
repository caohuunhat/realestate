import React, { Component } from 'react';
import Banner from '../components/Banner';
import HotProperties from '../components/HotProperties';
import Properties from '../components/Properties'


class BuyCategoryPage extends Component {
    render() {
        let pageName = 'Nhà Đất Bán';
        return (
            <>
                {/* banner */}
                <Banner pageName={pageName} />
                {/* banner */}
                <div className="container">
                    <div className="properties-listing spacer">
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 ">
                                <div className="search-form"><h4><span className="glyphicon glyphicon-search" /> Search for</h4>
                                    <input type="text" className="form-control" placeholder="Search of Properties" />
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <select className="form-control">
                                                <option>Buy</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-7">
                                            <select className="form-control">
                                                <option>Price</option>
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
                                                <option>Property Type</option>
                                                <option>Apartment</option>
                                                <option>Building</option>
                                                <option>Office Space</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary">Find Now</button>
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
                                            <option>Sort by</option>
                                            <option>Price: Low to High</option>
                                            <option>Price: High to Low</option>
                                        </select></div>
                                </div>
                                <div className="row">
                                    {/* properties */}
                                    <Properties />
                                    {/* properties */}
                                </div>
                                <div className="center">
                                    <ul className="pagination">
                                        <li><a href="#">«</a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">»</a></li>
                                    </ul>
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
