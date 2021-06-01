import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Confirm } from 'react-st-modal';
import getAPI from "../../api/getAPI";
import checkSeach from "../../constans/testSeach";
import Account_management from "./Account_management";
import Feedback from "./Feedback";
import Post_management from "./Post_management";
import Seach from "./Seach";
import UpdateProduct from "./UpdateProduct";

export class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataPost1: [],
      dataPost2: [],
      keyword: "",
    };
  }

  componentDidMount() {
    this.callAPI()
      .then((res) => {
        this.setState({
          data: res?.data?.list,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.callPostAPI1()
      .then((res) => {
        this.setState({
          dataPost1: res?.data?.list,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.callPostAPI2()
      .then((res) => {
        this.setState({
          dataPost2: res.data.list,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  callAPI = async () => {
    return await getAPI(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/user_account/list_user.php",
      "GET",
      "d174cb46cdd38238c9867ecc661eb3de"
    );
  };

  callPostAPI1 = async () => {
    return await getAPI(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/confirm/list_post.php",
      "GET",
      "d174cb46cdd38238c9867ecc661eb3de"
    );
  };

  callPostAPI2 = async () => {
    return await getAPI(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/approved/list.php",
      "GET",
      "d174cb46cdd38238c9867ecc661eb3de"
    );
  };

  DeleteUser = async (id) => {
    return await getAPI(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/user_account/delete.php?id=",
      "DELETE",
      "d174cb46cdd38238c9867ecc661eb3de",
      null,
      id
    );
  };

  onDelete = async (tenant_id) => {
    const confirm = await Confirm("Bạn có muốn xóa người dùng này?", "Thông báo");
    if (confirm) {
      this.DeleteUser(tenant_id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.errors);
        });
    }
  };

  onSeach = (keyword) => {
    this.setState({
      keyword: keyword.toLowerCase(),
    });
  };

  render() {
    let { data, dataPost1, dataPost2, keyword } = this.state;
    let dataPost = [...dataPost1, ...dataPost2];
    console.log(dataPost2);
    data = checkSeach(data, keyword, "full_name", "email", "phone_no");
    dataPost = checkSeach(
      dataPost,
      keyword,
      "name",
      "phone",
      "email",
      "estimated_price",
      "ptype_name",
      "post_time"
    );

    return (
      <div class="main-panel">
        <Seach onSeach={this.onSeach} />

        <Route exact path="/">
          <Account_management
            listUser={data}
            onDelete={this.onDelete}
            onSeach={this.onSeach}
          />
        </Route>

        <Route path="/edit/:note/:id" component={UpdateProduct}></Route>

        <Route path="/post_management">
          <Post_management listPost={dataPost} />
        </Route>

        <Route path="/feedback">
          <Feedback />
        </Route>
      </div>
    );
  }
}
export default Admin;