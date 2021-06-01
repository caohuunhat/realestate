import React, { Component } from 'react';
import HotProperties from '../components/HotProperties/HotProperties';
import HotBuyProperties from '../components/Properties/HotBuyProperties';
import HotRentProperties from '../components/Properties/HotRentProperties';


class HomePage extends Component {
    render() {
        return (
            <>
                {/* Banner */}
                {/* Banner */}
                <div id="carousel-id" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-id" data-slide-to={0} className />
                        <li data-target="#carousel-id" data-slide-to={1} className />
                        <li data-target="#carousel-id" data-slide-to={2} className="active" />
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img alt="Third slide" src="https://1.bp.blogspot.com/-fJOYWF8sRcc/XqPMUl5F0uI/AAAAAAAAipA/FOrgLq4mcqQ23Lp_hA4_QPcjGym-ez4agCLcBGAsYHQ/s1600/Hinh-anh-dep-nhat-the-gioi%2B%25281%2529.jpg" style={{ width: "100%", height: "550px" }} />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Các bài đăng hấp dẫn</h1>
                                    <p>Hỗ trợ đăng tin và tiềm kiếm tin theo yêu cầu của bạn</p>
                                    <p><a className="btn btn-lg btn-login" href="#" role="button">Xem chi tiết</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
                    <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
                </div>

                <div className="container">
                    <div className="properties-listing spacer">
                        <h2 className="h2-black">Các bài đăng nổi bật</h2>
                        <HotBuyProperties />
                        <HotRentProperties />
                    </div>


                    <div className="spacer">
                        <div className="row">
                            <div className="col-lg-6 col-sm-9 recent-view">
                                <h3>Về chúng tôi</h3>
                                <p>Là công ty tiên phong xây dựng thị trường bất động sản minh bạch và thúc đẩy các giao dịch trên thị trường BĐS Việt Nam diễn ra dễ dàng, nhanh chóng thông qua sự đột phá trên nền tảng công nghệ dẫn dắt bởi đội ngũ chuyên gia hàng đầu
RE luôn cam kết sự Chính Xác, Minh Bạch, Thông Minh và Chuyên Nghiệp trên tất cả thông tin, sản phẩm và dịch vụ mà chúng tôi cung cấp. Đội ngũ nhân viên kinh doanh tâm huyết cam kết, luôn tư vấn và phục vụ khách hàng nhanh chóng, kịp thời và tận tâm nhất. Để đạt được sứ mệnh cuối cùng là tất cả mọi người đều đưa ra được những quyết định đúng đắn và có trải nghiệm hài lòng khi giao dịch tại RE. </p>
                            </div>
                            <div className="col-lg-5 col-lg-offset-1 col-sm-3 recommended">
                                <h3>Gợi ý</h3>
                                {/* Gợi ý */}

                                <HotProperties />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomePage;
