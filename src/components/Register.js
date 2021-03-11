import React, { Component } from 'react';
import Banner from './Banner';

class Register extends Component {
    render() {
        return (
            <div>
                {/* Banner */}
                <Banner/>
                {/*banner */}
                <div className="container">
                    <div className="spacer">
                        <div className="row register">
                            <div className="col-lg-6 col-lg-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 ">
                                <input type="text" className="form-control" placeholder="Full Name" name="form_name" />
                                <input type="text" className="form-control" placeholder="Enter Email" name="form_email" />
                                <input type="password" className="form-control" placeholder="Password" name="form_phone" />
                                <input type="password" className="form-control" placeholder="Confirm Password" name="form_phone" />
                                <textarea rows={6} className="form-control" placeholder="Address" name="form_message" defaultValue={""} />
                                <button type="submit" className="btn btn-success" name="Submit">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;