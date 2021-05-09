import React, { Component } from 'react';
import Banner from '../components/Banner';

class AgentPage extends Component {
    render() {
        let pageName = 'Agent';
        return (
            <div>
                {/* banner */}
                <Banner pageName={pageName}/>
                {/* banner */}
                <div className="container">
                    <div className="spacer agents">
                        <div className="row">
                            <div className="col-lg-8  col-lg-offset-2 col-sm-12">
                                {/* agents */}
                                <div className="row">
                                    <div className="col-lg-2 col-sm-2 "><a href="#"><img src="images/agents/1.jpg" className="img-responsive" alt="agent name" /></a></div>
                                    <div className="col-lg-7 col-sm-7 "><h4>John Smith</h4><p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p></div>
                                    <div className="col-lg-3 col-sm-3 "><span className="glyphicon glyphicon-envelope" /> <a href="mailto:abc@realestate.com">abc@realestete.com</a><br />
                                        <span className="glyphicon glyphicon-earphone" /> (9009) 899 889</div>
                                </div>
                                {/* agents */}
                                {/* agents */}
                                <div className="row">
                                    <div className="col-lg-2 col-sm-2 "><a href="#"><img src="images/agents/2.jpg" className="img-responsive" alt="agent name" /></a></div>
                                    <div className="col-lg-7 col-sm-7 "><h4>John Smith</h4><p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p></div>
                                    <div className="col-lg-3 col-sm-3 "><span className="glyphicon glyphicon-envelope" /> <a href="mailto:abc@realestate.com">abc@realestete.com</a><br />
                                        <span className="glyphicon glyphicon-earphone" /> (9009) 899 889</div>
                                </div>
                                {/* agents */}
                                {/* agents */}
                                <div className="row">
                                    <div className="col-lg-2 col-sm-2 "><a href="#"><img src="images/agents/3.jpg" className="img-responsive" alt="agent name" /></a></div>
                                    <div className="col-lg-7 col-sm-7 "><h4>John Smith</h4><p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p></div>
                                    <div className="col-lg-3 col-sm-3 "><span className="glyphicon glyphicon-envelope" /> <a href="mailto:abc@realestate.com">abc@realestete.com</a><br />
                                        <span className="glyphicon glyphicon-earphone" /> (9009) 899 889</div>
                                </div>
                                {/* agents */}
                                {/* agents */}
                                <div className="row">
                                    <div className="col-lg-2 col-sm-2 "><a href="#"><img src="images/agents/4.jpg" className="img-responsive" alt="agent name" /></a></div>
                                    <div className="col-lg-7 col-sm-7 "><h4>John Smith</h4><p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p></div>
                                    <div className="col-lg-3 col-sm-3 "><span className="glyphicon glyphicon-envelope" /> <a href="mailto:abc@realestate.com">abc@realestete.com</a><br />
                                        <span className="glyphicon glyphicon-earphone" /> (9009) 899 889</div>
                                </div>
                                {/* agents */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgentPage;