import React, { Component } from 'react';
import Banner from '../components/Banner';
import axios from 'axios'
import HotProperties from '../components/HotProperties';

// const customLi = (img, { active }) => {

//     return <div className={`item ${active ? '' : 'active'}`}>
//         <img src={img} className="properties" alt="properties" />
//     </div>
// }
class ProductDetailPage extends Component {
    state = {
        id: this.props.match,
        datas: {
            caption: '',
            description: '',
            price: '',
            address: '',
            type: '',
            name: '',
            land_area: '',
            time: '',
            images: []
        }
    }

    componentDidMount() {
        const { id } = this.state
        axios.get('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/data-index/details_rs.php?id=105', {
            params: {
                id: id
            }
        })
            .then(res => {
                console.log(res.data);
                this.setState({
                    datas: {
                        caption: res.data.caption,
                        description: res.data.description,
                        price: res.data.estimated_price,
                        address: res.data.google_map,
                        type: res.data.ptypeName,
                        name: res.data.name,
                        land_area: res.data.land_area,
                        time: res.data.post_time,
                        images: res.data.img.image
                    }
                })
            })
    }

    showSlides = () => {
        const { images } = this.state.datas;
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators hidden-xs">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} className />
                    <li data-target="#myCarousel" data-slide-to={2} className />
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/owner/product-photo/60956f3420506.jpg" className="properties" width="100%" alt="properties" />
                    </div>
                    {/* #Item 1 */}
                    {/* Item 2 */}
                    <div className="item">
                        <img src="http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/owner/product-photo/60956f3420506.jpg" className="properties" width="100%" alt="properties" />
                    </div>
                    {/* #Item 2 */}
                    {/* Item 3 */}
                    <div className="item">
                        <img src="http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/owner/product-photo/60956f3420506.jpg" className="properties" width="100%" alt="properties" />
                    </div>
                    {/* #Item 3 */}
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
            </div>
        )
    }

    render() {
        const { caption, description, price, address, name, time, land_area } = this.state.datas
        const currency = new Intl.NumberFormat().format(parseInt(price))
        const pageName = 'Thông tin chi tiết'
        return (
            <div>
                {/* banner */}
                <Banner pageName={pageName} />
                {/* banner */}
                <div className="container">
                    <div className="properties-listing spacer">
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 hidden-xs">
                                <div className="hot-properties hidden-xs">
                                    <h4>Hot Properties</h4>
                                    {/* Bài đăng nổi bật */}
                                    <HotProperties />
                                    {/* Bài đăng nổi bật */}
                                </div>
                                <div className="advertisement">
                                    <h4>Advertisements</h4>
                                    <img src="images/advertisements.jpg" className="img-responsive" alt="advertisement" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-sm-8 ">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="property-images">
                                            {/* Slider Starts */}
                                            {this.showSlides()}
                                            {/* {newArr} */}
                                            {/* #Slider Ends */}
                                        </div>
                                        <br />
                                        <div className="spacer">

                                            <h3>{caption}</h3>

                                        </div>
                                        <div className="spacer">
                                            <h4>
                                                <span className="glyphicon glyphicon-th-list" />Thông tin mô tả
                                            </h4>
                                            <div class="row">
                                                <div class="row">
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <ul className="ul-detail">
                                                            <li>Mức giá: </li>
                                                            <li>{currency}</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <ul className="ul-detail">
                                                            <li>Diện tích: </li>
                                                            <li>{land_area} m²</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <ul className="ul-detail">
                                                            <li>Thời gian đăng: </li>
                                                            <li>{time}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="spacer">
                                            <h4>
                                                <span className="glyphicon glyphicon-th-list" />Thông tin mô tả
                                            </h4>
                                            <p>{description}</p>
                                        </div>
                                        <div>
                                            <h4><span className="glyphicon glyphicon-map-marker" />Địa chỉ</h4>
                                            <div className="well"><iframe width="100%" height={350} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Pulchowk,+Patan,+Central+Region,+Nepal&aq=0&oq=pulch&sll=37.0625,-95.677068&sspn=39.371738,86.572266&ie=UTF8&hq=&hnear=Pulchowk,+Patan+Dhoka,+Patan,+Bagmati,+Central+Region,+Nepal&ll=27.678236,85.316853&spn=0.001347,0.002642&t=m&z=14&output=embed" /></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="col-lg-12  col-sm-6">
                                            <div className="property-info">
                                                <p className="price">$ {currency} VND</p>
                                                <p className="area"><span className="glyphicon glyphicon-map-marker" /> {address}</p>
                                                <div className="profile">
                                                    <span className="glyphicon glyphicon-user" />Người đăng bài<p className="text-uppercase">{name}<br />009 229 2929</p>
                                                </div>
                                            </div>
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

export default ProductDetailPage;