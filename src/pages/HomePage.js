import React, { Component } from 'react';
import Banner from '../components/Banner';


class HomePage extends Component {
    render() {
        return (
            <>
                {/* Banner */}
                {/* <Banner/> */}
                {/* Banner */}
                <div id="carousel-id" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-id" data-slide-to={0} className />
                        <li data-target="#carousel-id" data-slide-to={1} className />
                        <li data-target="#carousel-id" data-slide-to={2} className="active" />
                    </ol>
                    <div className="carousel-inner">
                        <div className="item">
                            <img alt="First slide" src="https://1.bp.blogspot.com/-fJOYWF8sRcc/XqPMUl5F0uI/AAAAAAAAipA/FOrgLq4mcqQ23Lp_hA4_QPcjGym-ez4agCLcBGAsYHQ/s1600/Hinh-anh-dep-nhat-the-gioi%2B%25281%2529.jpg" style={{ width: "100%", height: "550px" }} />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Example headline.</h1>
                                    <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Xem chi tiết</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img alt="Second slide" src="https://1.bp.blogspot.com/-fJOYWF8sRcc/XqPMUl5F0uI/AAAAAAAAipA/FOrgLq4mcqQ23Lp_hA4_QPcjGym-ez4agCLcBGAsYHQ/s1600/Hinh-anh-dep-nhat-the-gioi%2B%25281%2529.jpg" style={{ width: "100%", height: "550px" }} />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Another example headline.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Xem chi tiết</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="item active">
                            <img alt="Third slide" src="https://1.bp.blogspot.com/-fJOYWF8sRcc/XqPMUl5F0uI/AAAAAAAAipA/FOrgLq4mcqQ23Lp_hA4_QPcjGym-ez4agCLcBGAsYHQ/s1600/Hinh-anh-dep-nhat-the-gioi%2B%25281%2529.jpg" style={{ width: "100%", height: "550px" }} />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>One more for good measure.</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Xem chi tiết</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
                    <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
                </div>


                {/* <div id="slider" className="sl-slider-wrapper">
                    <div className="sl-slider">
                        <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation={-25} data-slice2-rotation={-25} data-slice1-scale={2} data-slice2-scale={2}>
                            <div className="sl-slide-inner">
                                <div className="bg-img bg-img-1" />
                                <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
                                <blockquote>
                                    <p className="location"><span className="glyphicon glyphicon-map-marker" /> 1890 Syndey, Australia</p>
                                    <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
                                    <cite>$ 20,000,000</cite>
                                </blockquote>
                            </div>
                        </div>
                        <div className="sl-slide" data-orientation="vertical" data-slice1-rotation={10} data-slice2-rotation={-15} data-slice1-scale="1.5" data-slice2-scale="1.5">
                            <div className="sl-slide-inner">
                                <div className="bg-img bg-img-2" />
                                <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
                                <blockquote>
                                    <p className="location"><span className="glyphicon glyphicon-map-marker" /> 1890 Syndey, Australia</p>
                                    <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
                                    <cite>$ 20,000,000</cite>
                                </blockquote>
                            </div>
                        </div>
                        <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation={3} data-slice2-rotation={3} data-slice1-scale={2} data-slice2-scale={1}>
                            <div className="sl-slide-inner">
                                <div className="bg-img bg-img-3" />
                                <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
                                <blockquote>
                                    <p className="location"><span className="glyphicon glyphicon-map-marker" /> 1890 Syndey, Australia</p>
                                    <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
                                    <cite>$ 20,000,000</cite>
                                </blockquote>
                            </div>
                        </div>
                        <div className="sl-slide" data-orientation="vertical" data-slice1-rotation={-5} data-slice2-rotation={25} data-slice1-scale={2} data-slice2-scale={1}>
                            <div className="sl-slide-inner">
                                <div className="bg-img bg-img-4" />
                                <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
                                <blockquote>
                                    <p className="location"><span className="glyphicon glyphicon-map-marker" /> 1890 Syndey, Australia</p>
                                    <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
                                    <cite>$ 20,000,000</cite>
                                </blockquote>
                            </div>
                        </div>
                        <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation={-5} data-slice2-rotation={10} data-slice1-scale={2} data-slice2-scale={1}>
                            <div className="sl-slide-inner">
                                <div className="bg-img bg-img-5" />
                                <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
                                <blockquote>
                                    <p className="location"><span className="glyphicon glyphicon-map-marker" /> 1890 Syndey, Australia</p>
                                    <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
                                    <cite>$ 20,000,000</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>{/* /sl-slider */}
                {/* <nav id="nav-dots" className="nav-dots">
                    <span className="nav-dot-current" />
                    <span />
                    <span />
                    <span />
                    <span />
                </nav> */}
                {/* </div> */}
                {/* slider-wrapper */}

                <div className="container">
                    <div className="properties-listing spacer"> <a href="buysalerent.php" className="pull-right viewall">View All Listing</a>
                        <h2>Featured Properties</h2>
                        <div id="owl-example" className="owl-carousel">
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/1.jpg" className="img-responsive" alt="properties" />
                                    <div className="status sold">Sold</div>
                                </div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/2.jpg" className="img-responsive" alt="properties" />
                                    <div className="status new">New</div>
                                </div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/3.jpg" className="img-responsive" alt="properties" /></div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/4.jpg" className="img-responsive" alt="properties" /></div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/1.jpg" className="img-responsive" alt="properties" />
                                    <div className="status sold">Sold</div>
                                </div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/2.jpg" className="img-responsive" alt="properties" />
                                    <div className="status sold">Sold</div>
                                </div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/3.jpg" className="img-responsive" alt="properties" />
                                    <div className="status new">New</div>
                                </div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/4.jpg" className="img-responsive" alt="properties" /></div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/1.jpg" className="img-responsive" alt="properties" /></div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/2.jpg" className="img-responsive" alt="properties" /></div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                            <div className="properties">
                                <div className="image-holder"><img src="images/properties/3.jpg" className="img-responsive" alt="properties" /></div>
                                <h4><a href="property-detail.php">Royal Inn</a></h4>
                                <p className="price">Price: $234,900</p>
                                <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                <a className="btn btn-primary" href="property-detail.php">View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="spacer">
                        <div className="row">
                            <div className="col-lg-6 col-sm-9 recent-view">
                                <h3>About Us</h3>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br /><a href="about.php">Learn More</a></p>
                            </div>
                            <div className="col-lg-5 col-lg-offset-1 col-sm-3 recommended">
                                <h3>Recommended Properties</h3>
                                <div id="myCarousel" className="carousel slide">
                                    <ol className="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                        <li data-target="#myCarousel" data-slide-to={1} className />
                                        <li data-target="#myCarousel" data-slide-to={2} className />
                                        <li data-target="#myCarousel" data-slide-to={3} className />
                                    </ol>
                                    {/* Carousel items */}
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <div className="row">
                                                <div className="col-lg-4"><img src="images/properties/1.jpg" className="img-responsive" alt="properties" /></div>
                                                <div className="col-lg-8">
                                                    <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                                    <p className="price">$300,000</p>
                                                    <a href="property-detail.php" className="more">More Detail</a> </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="row">
                                                <div className="col-lg-4"><img src="images/properties/2.jpg" className="img-responsive" alt="properties" /></div>
                                                <div className="col-lg-8">
                                                    <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                                    <p className="price">$300,000</p>
                                                    <a href="property-detail.php" className="more">More Detail</a> </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="row">
                                                <div className="col-lg-4"><img src="images/properties/3.jpg" className="img-responsive" alt="properties" /></div>
                                                <div className="col-lg-8">
                                                    <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                                    <p className="price">$300,000</p>
                                                    <a href="property-detail.php" className="more">More Detail</a> </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="row">
                                                <div className="col-lg-4"><img src="images/properties/4.jpg" className="img-responsive" alt="properties" /></div>
                                                <div className="col-lg-8">
                                                    <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                                    <p className="price">$300,000</p>
                                                    <a href="property-detail.php" className="more">More Detail</a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage;
