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
            ptypeName: '',
            chouse_name: '',
            phone: '',
            // images: []
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
                        ptypeName: res.data.ptypeName,
                        chouse_name: res.data.chouse_name,
                        phone: res.data.phone,
                        // images: res.data.img.image
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
        const { caption, description, price, address, name, time, land_area, ptypeName, chouse_name, phone } = this.state.datas
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
                                            <h3>🏛️ {caption}</h3>
                                            <p className="area"><span className="glyphicon glyphicon-map-marker" /> {address}</p>
                                        </div>
                                        <div className="spacer">
                                            <h4>
                                                <span className="glyphicon glyphicon-th" />Thông tin bài đăng
                                            </h4>
                                            <div class="row">
                                                <div class="row">
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <ul className="ul-detail">
                                                            <li>Mức giá: </li>
                                                            <li className="li-detail">{currency} vnd</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <ul className="ul-detail">
                                                            <li>Diện tích: </li>
                                                            <li className="li-detail">{land_area} m²</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <ul className="ul-detail">
                                                            <li>Thời gian đăng: </li>
                                                            <li className="li-detail">{time}</li>
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

                                        <h4>
                                            <span className="glyphicon glyphicon-home" />Đặc điểm bài đăng
                                        </h4>
                                        <div className="spacer-detail">
                                            <div className="row">
                                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <span className="dacdiem">Loại tin đăng:</span>
                                                </div>

                                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                                    <span className="text-left">{`${ptypeName} - ${chouse_name}`}</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                                </div>
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <span className="dacdiem">Địa chỉ cụ thể:</span>
                                                </div>
                                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                                    <span className="text-left">{address}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4><span className="glyphicon glyphicon-map-marker" />Địa chỉ</h4>
                                            <div className="well"><iframe width="100%" height={350} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Pulchowk,+Patan,+Central+Region,+Nepal&aq=0&oq=pulch&sll=37.0625,-95.677068&sspn=39.371738,86.572266&ie=UTF8&hq=&hnear=Pulchowk,+Patan+Dhoka,+Patan,+Bagmati,+Central+Region,+Nepal&ll=27.678236,85.316853&spn=0.001347,0.002642&t=m&z=14&output=embed" /></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="col-lg-12  col-sm-6">
                                            <div className="property-info box-contact">
                                                <div className="profile user">
                                                    <div className="avatar">
                                                        <img src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043248-avatar-female-portrait-woman_113285.png" />
                                                        {/* <img src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" /> */}
                                                    </div>
                                                    {/* <span className="glyphicon glyphicon-user" />NGƯỜI ĐĂNG BÀI */}
                                                    <div className="name" title={name}>
                                                        {name}
                                                    </div>
                                                    <div className="phone text-center"><span className="phoneEvent showHotline">{phone} - Phone</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-6 ">
                                            <div className="enquiry">
                                                <h4><span className="glyphicon glyphicon-envelope" />Phản hồi</h4>
                                                <form role="form">
                                                    <input type="text" required className="form-control" placeholder="Họ tên" />
                                                    <input type="text" className="form-control" placeholder="Email" />
                                                    <input type="text" required className="form-control" placeholder="Số điện thoại" />
                                                    <textarea rows={6} required className="form-control" placeholder="Vấn đề cần báo cáo" defaultValue={""} />
                                                    <button type="submit" className="btn btn-primary" name="Submit">Gửi phản hồi</button>
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