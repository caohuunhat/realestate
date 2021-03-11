import React, { Component } from 'react';
import Banner from './Banner';

class ProductDetail extends Component {
    render() {
        return (
            <div>
                {/* banner */}
                <Banner />
                {/* banner */}
                <div className="container">
                    <div className="properties-listing spacer">
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 hidden-xs">
                                <div className="hot-properties hidden-xs">
                                    <h4>Hot Properties</h4>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-5"><img src="images/properties/4.jpg" className="img-responsive img-circle" alt="properties" /></div>
                                        <div className="col-lg-8 col-sm-7">
                                            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                            <p className="price">$300,000</p> </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-5"><img src="images/properties/1.jpg" className="img-responsive img-circle" alt="properties" /></div>
                                        <div className="col-lg-8 col-sm-7">
                                            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                            <p className="price">$300,000</p> </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-5"><img src="images/properties/3.jpg" className="img-responsive img-circle" alt="properties" /></div>
                                        <div className="col-lg-8 col-sm-7">
                                            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                            <p className="price">$300,000</p> </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-5"><img src="images/properties/2.jpg" className="img-responsive img-circle" alt="properties" /></div>
                                        <div className="col-lg-8 col-sm-7">
                                            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                            <p className="price">$300,000</p> </div>
                                    </div>
                                </div>
                                <div className="advertisement">
                                    <h4>Advertisements</h4>
                                    <img src="images/advertisements.jpg" className="img-responsive" alt="advertisement" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-sm-8 ">
                                <h2>2 room and 1 kitchen apartment</h2>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="property-images">
                                            {/* Slider Starts */}
                                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                                {/* Indicators */}
                                                <ol className="carousel-indicators hidden-xs">
                                                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                                    <li data-target="#myCarousel" data-slide-to={1} className />
                                                    <li data-target="#myCarousel" data-slide-to={2} className />
                                                    <li data-target="#myCarousel" data-slide-to={3} className />
                                                </ol>
                                                <div className="carousel-inner">
                                                    {/* Item 1 */}
                                                    <div className="item active">
                                                        <img src="images/properties/4.jpg" className="properties" alt="properties" />
                                                    </div>
                                                    {/* #Item 1 */}
                                                    {/* Item 2 */}
                                                    <div className="item">
                                                        <img src="images/properties/2.jpg" className="properties" alt="properties" />
                                                    </div>
                                                    {/* #Item 2 */}
                                                    {/* Item 3 */}
                                                    <div className="item">
                                                        <img src="images/properties/1.jpg" className="properties" alt="properties" />
                                                    </div>
                                                    {/* #Item 3 */}
                                                    {/* Item 4 */}
                                                    <div className="item ">
                                                        <img src="images/properties/3.jpg" className="properties" alt="properties" />
                                                    </div>
                                                    {/* # Item 4 */}
                                                </div>
                                                <a className="left carousel-control" href="#myCarousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
                                                <a className="right carousel-control" href="#myCarousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
                                            </div>
                                            {/* #Slider Ends */}
                                        </div>
                                        <div className="spacer"><h4><span className="glyphicon glyphicon-th-list" /> Properties Detail</h4>
                                            <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
                                            <p>Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service</p>
                                        </div>
                                        <div><h4><span className="glyphicon glyphicon-map-marker" /> Location</h4>
                                            <div className="well"><iframe width="100%" height={350} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Pulchowk,+Patan,+Central+Region,+Nepal&aq=0&oq=pulch&sll=37.0625,-95.677068&sspn=39.371738,86.572266&ie=UTF8&hq=&hnear=Pulchowk,+Patan+Dhoka,+Patan,+Bagmati,+Central+Region,+Nepal&ll=27.678236,85.316853&spn=0.001347,0.002642&t=m&z=14&output=embed" /></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="col-lg-12  col-sm-6">
                                            <div className="property-info">
                                                <p className="price">$ 200,000,000</p>
                                                <p className="area"><span className="glyphicon glyphicon-map-marker" /> 344 Villa, Syndey, Australia</p>
                                                <div className="profile">
                                                    <span className="glyphicon glyphicon-user" /> Agent Details
                                                    <p>John Parker<br />009 229 2929</p>
                                                </div>
                                            </div>
                                            <h6><span className="glyphicon glyphicon-home" /> Availabilty</h6>
                                            <div className="listing-detail">
                                                <span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-6 ">
                                            <div className="enquiry">
                                                <h6><span className="glyphicon glyphicon-envelope" /> Post Enquiry</h6>
                                                <form role="form">
                                                    <input type="text" className="form-control" placeholder="Full Name" />
                                                    <input type="text" className="form-control" placeholder="you@yourdomain.com" />
                                                    <input type="text" className="form-control" placeholder="your number" />
                                                    <textarea rows={6} className="form-control" placeholder="Whats on your mind?" defaultValue={""} />
                                                    <button type="submit" className="btn btn-primary" name="Submit">Send Message</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProductDetail;