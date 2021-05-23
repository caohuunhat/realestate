import React, { Component } from 'react';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import ModalContent from './ModalContent';
import './ModalContent.css'
class PopupCom extends Component {
    state = {
        name: this.props.name,
        modalDatas: this.props.modalDatas,
    }
    render() {
        const { name, modalDatas } = this.state;
        return (
            <Popup trigger={<button className="btn btn-default paid-button">{name}</button>} position="right center" modal="true">
                {close => <ModalContent close={close} modalDatas={modalDatas} />}
            </Popup>
        )
    }
}
export default PopupCom;