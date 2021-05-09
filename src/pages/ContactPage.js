import React, { Component } from 'react';
import Banner from '../components/Banner';

class ContactPage extends Component {
    render() {
        let pageName = 'Contact';
        return (
            <div>
                {/* banner */}
                <Banner pageName={pageName}/>
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
                                <div className="well"><iframe width="100%" height={300} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.101814576944!2d108.2113806145136!3d16.06020554394647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219caa62ae69b%3A0x55d36579ce6ee9c!2zTmd1eeG7hW4gSG_DoG5nLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1617872944337!5m2!1svi!2s" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;