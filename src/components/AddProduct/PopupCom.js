import React, { Component } from 'react';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import ModalContent from './ModalContent';
import './ModalContent.css'
class PopupCom extends Component {
    render() {
        return (
            <Popup trigger={<button> Trigger</button>} position="right center" modal="true">
                {close => <ModalContent close={close} />}
            </Popup>
        )
    }
}
export default PopupCom;