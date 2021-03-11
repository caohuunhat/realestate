import React, { Component } from 'react';
import Banner from './Banner';

class Contact extends Component {
    render() {
        return (
            <div>
                {/* banner */}
                <Banner/>
                {/* banner */}
                <div className="container">
                    <div className="spacer">
                        <div className="row contact">
                            <div className="col-lg-6 col-sm-6 ">
                                <input type="text" className="form-control" placeholder="Full Name" />
                                <input type="text" className="form-control" placeholder="Email Address" />
                                <input type="text" className="form-control" placeholder="Contact Number" />
                                <textarea rows={6} className="form-control" placeholder="Message" defaultValue={""} />
                                <button type="submit" className="btn btn-success" name="Submit">Send Message</button>
                            </div>
                            <div className="col-lg-6 col-sm-6 ">
                                <div className="well"><iframe width="100%" height={300} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Pulchowk,+Patan,+Central+Region,+Nepal&aq=0&oq=pulch&sll=37.0625,-95.677068&sspn=39.371738,86.572266&ie=UTF8&hq=&hnear=Pulchowk,+Patan+Dhoka,+Patan,+Bagmati,+Central+Region,+Nepal&ll=27.678236,85.316853&spn=0.001347,0.002642&t=m&z=14&output=embed" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;