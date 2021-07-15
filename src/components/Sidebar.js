import React from 'react';
import './css/Sidebar.css';
import SidebarChannel from './SidebarChannel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import {Avatar} from '@material-ui/core';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h3>Nazwa kanału</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Kanały tekstowe</h4>
                    </div>
                <AddIcon className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
            </div>
        </div>

        <div className="sidebar__profile">
            <Avatar />
            <div className="sidebar__profileInfo">
                <h3>@Luki1235512</h3>
                <p>#ID</p>
            </div>

            <div className="sidebar__profileIcons">
                <SettingsIcon />
            </div>
        </div>
    </div>
    )
}

export default Sidebar
