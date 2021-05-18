import React, { Component } from 'react'
import Banner from '../components/Banner';
import Profile from '../components/Profile/Profile';

class ProfilePage extends Component {
    render() {
        const pageName = 'Quản lý tin'
        return (
            <>
                <Banner pageName={pageName} />
                <div class="container mt-10 mb-40">
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <Profile />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default ProfilePage;