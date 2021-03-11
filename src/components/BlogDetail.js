import React, { Component } from 'react';
import Banner from './Banner';

class BlogDetail extends Component {
    render() {
        return (
            <div>
                {/* banner */}
                <Banner />
                {/* banner */}
                <div className="container">
                    <div className="spacer blog">
                        <div className="row">
                            <div className="col-lg-8">
                                {/* blog detail */}
                                <h2>Creative business to takeover the market</h2>
                                <div className="info">Posted on: Jan 20, 2013</div>
                                <img src="images/blog/1.jpg" className="thumbnail img-responsive" alt="blog title" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                {/* blog detail */}
                            </div>
                            <div className="col-lg-4 visible-lg">
                                {/* tabs */}
                                <div className="tabbable">
                                    <ul className="nav nav-tabs">
                                        <li className><a href="#tab1" data-toggle="tab">Recent Post</a></li>
                                        <li className><a href="#tab2" data-toggle="tab">Most Popular</a></li>
                                        <li className="active"><a href="#tab3" data-toggle="tab">Most Commented</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane" id="tab1">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5><a href="blogdetail.php">Real estate marketing growing</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Real estate marketing growing</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Real estate marketing growing</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane" id="tab2">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5><a href="blogdetail.php">Market update on new apartments</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Market update on new apartments</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Market update on new apartments</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane active" id="tab3">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5><a href="blogdetail.php">Creative business to takeover the market</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Creative business to takeover the market</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* tabs */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogDetail;