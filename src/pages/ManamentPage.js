import React, { Component } from 'react'
import Banner from "../components/Banner";
import List from "../components/Manament/List"
import Profile from "../components/Manament/Profile"

class ManamentPage extends Component {
    render() {
        const pageName = 'Thông tin'
        return (
            <>
                <Banner pageName={pageName} />

                <div class="container mt-10 mb-40">
                    <div class="row">
                        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <Profile />
                        </div>
                        <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                            <List />
                        </div>
                    </div>

                </div>

            </>
        )
    }
}

export default ManamentPage;