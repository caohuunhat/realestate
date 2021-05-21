import React, { Component } from 'react'
import './ModalContent.css'

class ModalContent extends Component {

    showModal = () => {
        const { modalDatas } = this.props;
        return modalDatas.errors ? <div className="content-popup">
            <h4 className="notifi">Thông báo</h4>
            <h3>Vui lòng nhập lại</h3>
            <p>Quý khách vui lòng nhập đúng thông tin theo yêu cầu</p>
            <p><span className="accent">Sai sót: </span>{modalDatas.errors}</p>
            <span className="accent-mini">* Nếu có bất kỳ sai sót nào vui lòng liên hệ <span className="phone-number">0352956129</span> để được hỗ trợ</span>
        </div> : <div className="content-popup">
            <h4 className="notifi">Thông báo</h4>
            <h3>Đang xử lý</h3>
            <p>Quý khách vui lòng thanh toán theo cú pháp bên dưới để bài đăng được duyệt</p>
            <p><span className="accent">Ngân Hàng: </span>VIETCOMBANK</p>
            <p><span className="accent">Chủ tài khoản: </span>CAO HUU NHAT (Cao Hữu Nhật)</p>
            <p><span className="accent">Số tài khoản: </span>12340569780</p>
            <p><span className="accent">Số tiền: </span>100.000 vnd</p>
            <p><span className="accent">Nội dung (lưu ý *): </span>NT 145</p>
            <p><span className="accent">Số tiền: </span>{modalDatas.errors}</p>
            <span className="accent-mini">* Lưu ý: quý khách vui lòng chuyển tiền theo đúng thông tin và (nội dung) như trên!</span>
            <span className="accent-mini">* Nếu có bất kỳ sai sót nào vui lòng liên hệ <span className="phone-number">0352956129</span> để được hỗ trợ</span>
        </div>
    }
    render() {
        return this.showModal()
    }
}

export default ModalContent;