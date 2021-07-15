import React from 'react';
import './css/SidebarChannel.css';

function SidebarChannel({id, channel}) {
    return (
        <div className="sidebarChannel">
            <h4><span className="sidebarChannel__hash">#</span>kanał</h4>
        </div>
    )
}

export default SidebarChannel;