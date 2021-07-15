import React from 'react';
import './css/Message.css';
import {Avatar} from "@material-ui/core";

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Luki1235512
                    <span className="message__timestamp">timestamp</span>
                </h4>
                <p>Wiadomość</p>
            </div>
        </div>
    )
}

export default Message;