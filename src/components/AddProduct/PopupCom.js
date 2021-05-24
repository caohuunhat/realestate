import React, { Component } from 'react';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import ModalPayment from '../Manament/ModalPayment';

class PopupCom extends Component {
    state = {
        name: this.props.name,
        modalDatas: this.props.modalDatas,
    }
    render() {
        const { name } = this.state;
        const { propertyId, disable, type } = this.props;
        return (
            <Popup trigger={<button className={`btn btn-default paid-button ${disable}`}>{name}</button>} position="right center" modal="true">
                {close => <ModalPayment
                    close={close}
                    type={type}
                    propertyId={propertyId} />}
            </Popup>
        )
    }
}
export default PopupCom;