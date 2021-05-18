import React, { Component } from 'react'
import Banner from '../components/Banner'
import { getCity, getDistrict, getWard, getKindNew, getPropertyType, getPostType } from '../constans/getAPI'
import callApiAu from '../utils/callApiAu'

class AddProductPage extends Component {
    state = {
        txtTitle: '',
        selType: '',
        selKind: '',
        selCity: '',
        selDistrict: '',
        selWard: '',
        txtHouseNum: '',
        txtStreet: '',
        txtPrice: '',
        txtArea: '',
        txtDesc: '',
        fileImages: [],
        selPostType: '',
        selNumDay: '',
        status: 0,
        cityDatas: [],
        districtDatas: [],
        wardDatas: [],
        kindNewDatas: [],
        propertyType: [],
        postType: [],
    }


    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    onChangeFile = (e) => {
        const { fileImages } = this.state;
        const file = e.target.files;

        const newImages = [...file]

        const imagesName = []
        newImages.map(img => (
            imagesName.push(img.name)
        ))

        if (newImages.length > 5) {
            alert("Vui lòng chọn dưới 5 ảnh")
        } else if (newImages.length < 3) {
            alert("Vui lòng chọn ít nhất 3 ảnh")
        } else {
            this.setState({
                fileImages: imagesName
            })
        }
    }

    componentDidMount() {
        getCity().then(res => {
            this.setState({
                cityDatas: res.data.list
            })
        })
        getDistrict().then(res => {
            this.setState({
                districtDatas: res.data.list
            })
        })
        getWard().then(res => {
            this.setState({
                wardDatas: res.data.list
            })
        })
        getKindNew().then(res => {
            this.setState({
                kindNewDatas: res.data.list
            })
        })
        getPropertyType().then(res => {
            this.setState({
                propertyType: res.data.list
            })
        })
        getPostType().then(res => {
            this.setState({
                postType: res.data.list
            })
        })
    }

    newCity = () => {
        const { cityDatas } = this.state
        const newCity = cityDatas.map(city => {
            return <option value={city.city_id}>{city.cityName}</option>
        })
        return newCity;
    }

    newDistrict = () => {
        const { districtDatas, selCity } = this.state
        const newDistrict = districtDatas.map(dis => {
            if (dis.city_id === selCity) {
                return <option value={dis.district_id}>{dis.districtName}</option>
            }
        })
        return newDistrict;
    }
    newWard = () => {
        const { wardDatas, selDistrict } = this.state
        const newWard = wardDatas.map(ward => {
            if (ward.district_id === selDistrict) {
                return <option value={ward.ward_id}>{ward.wardName}</option>
            }
        })
        return newWard;
    }

    kindNews = () => {
        const { kindNewDatas } = this.state
        const newKind = kindNewDatas.map(kind => {
            return <option value={kind.id}>{`${kind.name} - ${kind.price}`}</option>
        })
        return newKind;
    }

    propertyType = () => {
        const { propertyType } = this.state
        const newType = propertyType.map(type => {
            return <option value={type.chouse_id}>{type.name}</option>
        })
        return newType;
    }

    postType = () => {
        const { postType } = this.state;
        const newPostType = postType.map(type => {
            return <option value={type.ptype_id}>{type.name}</option>
        })
        return newPostType;
    }

    //Hello

    handleOnSubmitPost = (e) => {
        e.preventDefault();
        const { selKind, selType, txtTitle, selPostType, selCity, selDistrict, selWard, txtStreet, txtHouseNum, txtPrice, txtArea, txtDesc, selNumDay, fileImages } = this.state;
        const token = sessionStorage.getItem("token");
        callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/add_property.php', 'POST', token,
            {
                chouse_id: selKind,
                ptype_id: selType,
                caption: txtTitle,
                kind_id: selPostType,
                city_id: selCity,
                district_id: selDistrict,
                ward_id: selWard,
                street: txtStreet,
                apartment_number: txtHouseNum,
                estimated_price: txtPrice,
                land_area: txtArea,
                description: txtDesc,
                day_number: selNumDay,
                p_photo: fileImages
            })
            .then(res => {
                console.log(res);
            })
    }

    render() {
        console.log(this.state);
        const pageName = 'Đăng tin';
        const {
            txtTitle,
            selType,
            selKind,
            selCity,
            selDistrict,
            selWard,
            txtHouseNum,
            txtStreet,
            txtPrice,
            txtArea,
            txtDesc,
            fileImages,
            selPostType,
            selNumDay,
        } = this.state;
        console.log(fileImages);
        return (
            <>
                <Banner pageName={pageName} />
                <div className="container">
                    <div className="row mt-40 mb-40">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="mt-10 center">
                                <h3>ĐĂNG TIN RAO BÁN, CHO THUÊ NHÀ ĐẤT</h3>
                                <p>(Quý vị nhập thông tin nhà đất cần bán hoặc cho thuê vào các mục dưới đây)</p>
                            </div>
                            <form onSubmit={this.handleOnSubmitPost}>
                                <div className="form-group">
                                    <label>Tiêu đề(<span className="star-color">*</span>)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        placeholder="Nhập vào tiêu đề"
                                        name="txtTitle"
                                        value={txtTitle}
                                        onChange={this.onChange}
                                        maxlength="100"
                                        title="Tiêu đề không nhập quá 100 từ"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Hình thức(<span className="star-color">*</span>)</label>
                                            <select
                                                className="form-control"
                                                name="selType"
                                                value={selType}
                                                onChange={this.onChange}
                                            >
                                                <option>-- Hình thức --</option>
                                                {this.postType()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Loại(<span className="star-color">*</span>)</label>
                                            <select
                                                className="form-control"
                                                name="selKind"
                                                value={selKind}
                                                onChange={this.onChange}
                                            >
                                                <option>-- Loại --</option>
                                                {this.propertyType()}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Thành phố(<span className="star-color">*</span>)</label>
                                    <select
                                        className="form-control"
                                        required
                                        name="selCity"
                                        value={selCity}
                                        onChange={this.onChange}
                                    >
                                        <option>-- Chọn thành phố --</option>
                                        {this.newCity()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Quận / Huyện</label>
                                    <select
                                        className="form-control"
                                        required
                                        name="selDistrict"
                                        value={selDistrict}
                                        onChange={this.onChange}
                                    >
                                        <option>-- Chọn Quận / Huyện --</option>
                                        {this.newDistrict()}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Thị Trấn / Xã</label>
                                    <select
                                        className="form-control"
                                        required
                                        name="selWard"
                                        value={selWard}
                                        onChange={this.onChange}
                                    >
                                        <option>-- Chọn Thị Trấn / Xã --</option>
                                        {this.newWard()}
                                    </select>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>Số nhà</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="txtHouseNum"
                                            value={txtHouseNum}
                                            onChange={this.onChange}
                                            placeholder="Nhập vào số nhà"
                                            pattern="[0-9]{1,8}"
                                            title="Vui lòng nhập 'số' và '/' và không quá 8 ký tự"
                                        />
                                    </div>
                                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <label>Đường(<span className="star-color">*</span>)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="txtStreet"
                                            value={txtStreet}
                                            onChange={this.onChange}
                                            placeholder="Nhập vào đường"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Giá(<span className="star-color">*</span>): </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="txtPrice"
                                                value={txtPrice}
                                                onChange={this.onChange}
                                                required
                                                placeholder="Nhập vào giá"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Diện tích(<span className="star-color">*</span>)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="txtArea"
                                                value={txtArea}
                                                onChange={this.onChange}
                                                placeholder="m2"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Mô tả về bài đăng(<span className="star-color">không quá 4000 từ</span>)</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        required
                                        placeholder="Nhập vào mô tả"
                                        name="txtDesc"
                                        value={txtDesc}
                                        onChange={this.onChange}
                                    ></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Tải ảnh lên (<span className="star-color">không quá 5 ảnh</span>)</label>
                                            <input
                                                type="file"
                                                multiple
                                                accept=".png, .jpg, .jpeg"
                                                name="fileImages"
                                                onChange={this.onChangeFile}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Loại tin(<span className="star-color">*</span>)</label>
                                            <select
                                                className="form-control"
                                                required
                                                name="selPostType"
                                                value={selPostType}
                                                onChange={this.onChange}
                                            >
                                                <option>-- Chọn loại tin --</option>
                                                {this.kindNews()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Số ngày đăng(<span className="star-color">*</span>)</label>
                                            <select
                                                className="form-control"
                                                required
                                                name="selNumDay"
                                                value={selNumDay}
                                                onChange={this.onChange}
                                            >
                                                <option>-- Chọn số ngày đăng --</option>
                                                <option value={5}>5 Ngày</option>
                                                <option value={10}>10 Ngày</option>
                                                <option value={15}>15 Ngày</option>
                                                <option value={20}>20 Ngày</option>
                                                <option value={30}>30 Ngày</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 confirm_box">
                                        <h4><span className="glyphicon glyphicon-exclamation-sign"></span> Vui lòng kiểm tra chính xác các thông tin trước khi đăng bài</h4></div>
                                </div>
                                <br />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >Đăng bài</button>
                            </form>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AddProductPage;