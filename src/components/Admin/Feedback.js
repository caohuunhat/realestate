import React, { Component } from "react";

export class Feedback extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-top card-header card-header-primary">
                  <h4 className="card-title ">Phản hồi</h4>
                  <p className="card-category">
                    {" "}
                  Phản hồi của khách hàng về bài đăng
                </p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>STT</th>
                          <th>ID bài đăng</th>
                          <th>Họ tên</th>
                          <th>Email</th>
                          <th>Số điện thoại</th>
                          <th>Nội dung phản hồi</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      {/* <tbody>{row}</tbody> */}
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>01</td>
                          <td>Huy Phan</td>
                          <td>huy@gmail.com</td>
                          <td>0123456789</td>
                          <td>Cần mua nhà</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                            >
                              Xóa
                            </button>
                            <button type="button" className="btn btn-detail">
                              Chi tiết
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>02</td>
                          <td>Huy Phan</td>
                          <td>huy@gmail.com</td>
                          <td>0123456789</td>
                          <td>Cần mua nhà</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger"
                            >
                              Xóa
                            </button>
                            <button type="button" className="btn btn-detail">
                              Chi tiết
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Feedback;